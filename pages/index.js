/* @jsx createElement */

import React from 'react'
import { createElement } from 'glamor/react'
import { container, columns, row } from 'glamor/ous'
import { merge } from 'glamor'
import Head from 'next/Head'
import { createCSS, createGlobalCSS } from '../utils/styles'

const appStoreUrl = 'https://itunes.apple.com/us/app/windchill-easy-windchill-calculator/id1175553238'

export default () => {
  return (
    <div css={$$.root}>
      <Head>
        <title>Windchill</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet" />
      </Head>

      <div css={merge(container, $$.container)}>
        <div css={row}>
          <div css={columns(6)}>
            <div css={$$.device}>
              <div css={$$.screen}>
                <img src="/static/screenshot.jpg" alt="" css={$$.img}/>
              </div>
            </div>
          </div>

          <div css={columns(6)}>
            <h1>Windchill</h1>
            <h2>Prepare for your trip more effectively by knowing the windchill at any temperature and wind speed.</h2>

            <ul>
              <li css={$$.li}>Uses US or SI units automatically</li>
              <li css={$$.li}>Displays current conditions for reference (tap to use values)</li>
              <li css={$$.li}>Great for outdoor activities like hiking, motorcycling, or driving with the top down</li>
            </ul>

            <a href={appStoreUrl} css={$$.appStoreButton}>
              <img src="/static/appstore.svg" alt="Download on the App Store" css={$$.appStoreButtonImg} />
            </a>
          </div>
        </div>

        <div css={row}>
          <div css={$$.footer}>
            <p>
              Made by <a href="https://twitter.com/nicinabox">@nicinabox</a>
            </p>
          </div>
        </div>
      </div>

      <div css={$$.triangle} />
    </div>
  )
}

createGlobalCSS({
  body: {
    backgroundImage: 'linear-gradient(to bottom right, #8093F3, #4990E2)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: '#fff',
    lineHeight: 1.3,
    fontSize: '24px',
    fontWeight: 100,
    fontFamily: 'Lato, -apple-system, BlinkMacSystemFont, sans-serif'
  },
  h1: {
    fontWeight: 100,
    fontSize: '81px',
    marginTop: 65,
    marginBottom: 15,
  },
  h2: {
    fontWeight: 100,
    fontSize: '36px',
    marginTop: 15,
    marginBottom: 15,
  },
  a: {
    color: '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid',
  }
})

const $$ = createCSS({
  root: {
    marginTop: 40,
    marginBottom: 40,
  },
  container: {
    maxWidth: 1400,
  },
  device: {
    background: 'url("/static/iphone6s.svg") no-repeat',
    backgroundSize: 'cover',
    width: 454,
    height: 835,
    position: 'relative',
    margin: '0 auto'
  },
  screen: {
    width: 320,
    position: 'absolute',
    top: 130,
    left: 67,
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    display: 'inline-block'
  },
  li: {
    marginBottom: 10
  },
  triangle: {
    width: '60%',
    height: '80%',
    background: 'url("/static/triangle.svg") no-repeat',
    backgroundPosition: 'bottom left',
    backgroundSize: 'contain',
    position: 'fixed',
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  appStoreButton: {
    display: 'inline-block',
    margin: '40px 0',
    border: 'none',
  },
  appStoreButtonImg: {
    width: 180
  },
  footer: {
    flex: 1,
    textAlign: 'center',
    opacity: 0.6,
    marginTop: 40,
    fontWeight: 300,
    fontSize: '70%'
  }
})
