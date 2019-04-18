const chokidar = require('chokidar')
const fs = require('fs')
const { promisify } = require('util')
const requireFromString = require('require-from-string')
const ora = require('ora')

const readFile = promisify(fs.readFile)
const serverFilename = './dist/server.js'

function defaultImport(obj) {
  return obj && obj.__esModule ? obj.default : obj
}

async function getServerMiddleware(filename, buffer, options) {
  const content = await readFile(serverFilename, 'utf-8')
  return defaultImport(requireFromString(content, serverFilename))
}

module.exports = async function hotServerMiddleware() {
  let serverMiddleware = await getServerMiddleware()

  chokidar
    .watch(serverFilename, {
      ignoreInitial: true,
      awaitWriteFinish: { stabilityThreshold: 100 },
    })
    .on('all', async () => {
      const spinner = ora('Updating Server Middleware')
      spinner.start()
      try {
        serverMiddleware = await getServerMiddleware()
      } catch (e) {
        spinner.fail()
        console.error(e)
        return
      }
      spinner.succeed()
    })

  return (req, res, next) => serverMiddleware(req, res, next)
}
