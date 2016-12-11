#!/usr/bin/env node

require('babel-register')({
  presets: [
    'es2015',
    'stage-0',
    'react'
  ]
})

var path = require('path')
var Head = require('next/dist/lib/head').default
var Document = require('./Document').default
var { renderStatic } = require('glamor/server')
var { createElement, cloneElement } = require('react')
var { renderToStaticMarkup } = require('react-dom/server')
var file = path.join(process.cwd(), process.argv[2])
var Component = require(file)

if (!Component) {
  console.error('No component found at', file)
  return false
}

if (Component.default) {
  Component = Component.default
}

const { html, css } = renderStatic(() => renderToStaticMarkup(createElement(Component)))
const head = Head.rewind()
const doc = createElement(Document, { html, head, css })

const markup = '<!DOCTYPE html>' + renderToStaticMarkup(doc)

process.stdout.write(markup)
