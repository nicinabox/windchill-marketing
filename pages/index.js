/* @jsx createElement */

import React from 'react'
import { createElement } from 'glamor/react'
import { container, columns, row } from 'glamor/ous'
import { media, merge, css } from 'glamor'
import Head from 'next/Head'
import { createCSS, createGlobalCSS } from '../utils/styles'

const appStoreUrl = 'https://itunes.apple.com/us/app/windchill-easy-windchill-calculator/id1175553238'

export default () => {
  return (
    <div css={$$.root}>
      <Head>
        <title>Windchill</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
            <h2>Prepare for your trip more effectively by knowing the windchill at any temperature and speed.</h2>

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

      <div css={$$.gradient} />
      <div css={$$.triangle} />
    </div>
  )
}

createGlobalCSS({
  body: {
    color: '#fff',
    lineHeight: 1.3,
    fontWeight: 300,
    fontFamily: 'Lato, Helvetica Neue, Helvetica, Arial, sans-serif',
    textRendering: 'optimizeLegibility' ,
  },
  h1: {
    fontWeight: 300,
    fontSize: '8.1rem',
    marginTop: 65,
    marginBottom: 25,
  },
  h2: {
    fontWeight: 300,
    fontSize: '3.6rem',
    marginTop: 25,
    marginBottom: 35,
  },
  li: {
    fontSize: '2.4rem',
  },
  a: {
    color: '#fff',
    textDecoration: 'none',
    borderBottom: '1px solid',
  }
})

css.insert(`
  @media (max-width: 1194px) {
    html {
      font-size: 8px
    }
  }
  @media (max-width: 900px) {
    html {
      font-size: 7px
    }
  }
  @media (max-width: 722px) {
    html {
      font-size: 6px
    }
  }
  @media (max-width: 549px) {
    html {
      font-size: 7px
    }
  }
`)

const deviceWidth = 452
const deviceHeight = 842
const screenTop = 131
const screenLeft = 67
const screenWidth = 320

const $$ = createCSS({
  root: {
    marginTop: 40,
    marginBottom: 40,
  },
  container: {
    maxWidth: 1400,
  },
  device: [{
    background: 'url("/static/iphone6s.svg") no-repeat',
    backgroundSize: 'cover',
    width: deviceWidth,
    height: deviceHeight,
    position: 'relative',
    margin: '0 auto',
    textAlign: 'center',
  },
    media('(max-width: 1194px)', {
      width: deviceWidth * 0.8,
      height: deviceHeight * 0.8,
    }),
    media('(max-width: 900px)', {
      marginTop: 40,
      width: deviceWidth * 0.6,
      height: deviceHeight * 0.6
    }),
    media('(max-width: 722px)', {
      width: deviceWidth * 0.5,
      height: deviceHeight * 0.5
    }),
    media('(max-width: 549px)', {
      width: deviceWidth * 0.7,
      height: deviceHeight * 0.7
    }),
    media('(max-width: 320px)', {
      width: deviceWidth * 0.6,
      height: deviceHeight * 0.6
    })
  ],
  screen: [{
    position: 'relative',
    width: screenWidth,
    left: screenLeft,
    top: screenTop,
  },
    media('(max-width: 1194px)', {
      width: screenWidth * 0.8,
      left: screenLeft * 0.8,
      top: screenTop * 0.8,
    }),
    media('(max-width: 900px)', {
      width: screenWidth * 0.6,
      left: screenLeft * 0.6,
      top: screenTop * 0.6,
    }),
    media('(max-width: 722px)', {
      width: screenWidth * 0.5,
      left: screenLeft * 0.5,
      top: screenTop * 0.5,
    }),
    media('(max-width: 549px)', {
      width: screenWidth * 0.7,
      left: screenLeft * 0.7,
      top: screenTop * 0.7,
    }),
    media('(max-width: 320px)', {
      width: screenWidth * 0.6,
      left: screenLeft * 0.6,
      top: screenTop * 0.6,
    })
  ],
  img: {
    maxWidth: '100%',
    height: 'auto',
    display: 'inline-block'
  },
  li: {
    marginBottom: 10
  },
  gradient: {
    backgroundColor: '#4990E2',
    backgroundImage: 'linear-gradient(to bottom right, #8093F3, #4990E2)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1
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
    fontSize: 16,
  },
})
