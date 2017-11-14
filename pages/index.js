import React from 'react'
import Head from 'next/head'
import Icon from '../components/Icon'
import Script from '../components/Script'
import Device from '../components/Device'
import Features from '../components/Features'
import Download from '../components/Download'
import Footer from '../components/Footer'

const SITE_ID = process.env.SITE_ID

export default () => {
  return (
    <div id="root">
      <Head>
        <title>Windchill</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet" />
        <link href="/static/flexboxgrid.min.css" rel="stylesheet" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-xs-12">
            <Device />
          </div>

          <div className="col-sm-7 col-xs-12">
            <h1>Cold fingers are the worst.</h1>
            <p className="lead">
              Windchill tells you what it <strong>feels like at speed</strong> so you can grab that extra pair of gloves and stay cozy on chilly mornings.
            </p>

            <Features />
            <Download />
            <Footer />
          </div>

        </div>
      </div>

      <div className="gradient" />
      <div className="triangle" />

      <Script>{`
        var _gauges = _gauges || [];
        (function() {
          var t   = document.createElement('script')
          t.type  = 'text/javascript'
          t.async = true
          t.id    = 'gauges-tracker'
          t.setAttribute('data-site-id', '${SITE_ID}')
          t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif')
          t.src = 'https://d36ee2fcip1434.cloudfront.net/track.js'
          var s = document.getElementsByTagName('script')[0]
          s.parentNode.insertBefore(t, s)
      `}</Script>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html {
          font-size: 62.5%;
        }
        body {
          margin: 0;
        }
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
        @media (max-width: 549px) {
          html {
            font-size: 7px
          }
        }

        body {
          color: #fff;
          line-height: 1.5;
          font-weight: 300;
          font-size: 16px;
          font-family: Lato, Helvetica Neue, Helvetica, Arial, sans-serif;
          text-rendering: optimizeLegibility;
        }

        #root {
          padding-top: 40px;
          padding-bottom: 40px;
        }

        .container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding-right: 15px;
          padding-left: 15px;
        }

        @media (max-width: 549px) {
          .col-12-sm {
            max-width: 100%;
          }
        }

        .justify-center {
          display: flex;
          justify-content: center;
        }

        .align-center {
          display: flex;
          align-items: center;
        }

        a {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid;
        }
      `}</style>

      <style jsx>{`
        h1 {
          font-weight: 500;
          font-size: 4.8rem;
          margin-top: 48px;
          margin-bottom: 25px;
          text-shadow: 0 1px rgba(0,0,0,0.29);
        }

        .lead {
          font-size: 2.6rem;
          line-height: 1.7;
        }

        .gradient {
          background-color: #4990E2;
          background-image: linear-gradient(to bottom right, #8093F3, #4990E2);
          background-repeat: no-repeat;
          background-attachment: fixed;
          position: fixed;
          will-change: transform;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: -1;
        }

        .triangle {
          width: 60%;
          height: 80%;
          background: url("/static/triangle.svg") no-repeat;
          background-position: bottom left;
          background-size: contain;
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: -1;
        }

      `}</style>
    </div>
  )
}
