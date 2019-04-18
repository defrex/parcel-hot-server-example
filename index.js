#!/bin/env node
const express = require('express')
const hotServerMiddleware = require('./hotServerMiddleware')

async function main() {
  const app = express()

  app.use('/dist', express.static('dist'))

  app.use(await hotServerMiddleware())

  app.get('*', (req, res) => {
    res.status(404).send('Not Found')
  })

  app.listen(3456, () => console.log('http://localhost:3456'))
}

main()
