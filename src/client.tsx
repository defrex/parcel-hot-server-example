import 'babel-polyfill'
import React from 'react'
import ReactDOM, { Renderer } from 'react-dom'
import InitialApp from './App'

function render(renderFunction: Renderer, App: typeof InitialApp) {
  const element = document.getElementById('app')
  const app = <App />
  renderFunction(app, element)
}

render(ReactDOM.hydrate, InitialApp)

const mod = module as any
if (mod.hot && mod.hot.accept) {
  mod.hot.accept(async () => {
    const FreshApp = (await import('./App')).default
    render(ReactDOM.render, FreshApp)
  })
}
