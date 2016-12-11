#!/usr/bin/env node

require('babel-register')({
  presets: [
    'es2015',
    'stage-0',
    'react'
  ]
})

var path = require('path')
var server = require('glamor/server')
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var file = path.join(process.cwd(), process.argv[2])
var Component = require(file)

if (!Component) {
  console.error('No component found at', file)
  return false
}

if (Component.default) {
  Component = Component.default
}

let { html, css } = server.renderStatic(() => {
  return ReactDOMServer.renderToStaticMarkup(
    React.createElement(Component)
  )
})

let markup = `<!DOCTYPE html>
<html>
  <head>
    <style>${css}</style>
  </head>
  <body>
    <div id='root'>${html}</div>
  </body>
</html>`

process.stdout.write(markup)
