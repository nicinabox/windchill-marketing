#!/usr/bin/env node

require('babel-register')({
  presets: [
    'es2015',
    'stage-0',
    'react'
  ]
})

const SITE_ID = process.env.SITE_ID
const path = require('path')
const Head = require('next/dist/lib/head').default
const Document = require('./Document').default
const analytics = require('./analytics').default
const { renderStatic } = require('glamor/server')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const file = path.join(process.cwd(), process.argv[2])
let Component = require(file)

if (!Component) {
  console.error('No component found at', file)
  return false
}

if (Component.default) {
  Component = Component.default
}

const { html, css } = renderStatic(() => renderToStaticMarkup(createElement(Component)))
const head = Head.rewind()
const doc = renderToStaticMarkup(createElement(Document, { html, head, css }))
  .replace('__analytics__', analytics(SITE_ID))

const markup = '<!DOCTYPE html>' + doc

process.stdout.write(markup)
