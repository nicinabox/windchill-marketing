import React from 'react'

const deviceWidth = 452
const deviceHeight = 842
const screenTop = 131
const screenLeft = 67
const screenWidth = 320

export default function Device () {
  return (
    <div className="device">
      <div className="screen">
        <img src="/static/screenshot.jpg" alt="" className="img" />
      </div>

      <style jsx>{`
        .device {
          background: url("/static/iphone6s.svg") no-repeat;
          background-size: cover;
          width: ${deviceWidth}px;
          height: ${deviceHeight}px;
          position: relative;
          margin: 0 auto;
          text-align: center;
        }

        img {
          max-width: 100%;
          height: auto;
          vertical-align: bottom;
          display: inline-block;
        }

        @media(max-width: 1194px) {
          .device {
            width: ${deviceWidth * 0.8}px;
            height: ${deviceHeight * 0.8}px;
          }
        }

        @media(max-width: 900px) {
          .device {
            margin-top: 40;
            width: ${deviceWidth * 0.6}px;
            height: ${deviceHeight * 0.6}px;
          }
        }

        @media(max-width: 722px) {
          .device {
            width: ${deviceWidth * 0.5}px;
            height: ${deviceHeight * 0.5}px;
          }
        }

        @media(max-width: 549px) {
          .device {
            width: ${deviceWidth * 0.7}px;
            height: ${deviceHeight * 0.7}px;
          }
        }

        @media(max-width: 320px) {
          .device {
            width: ${deviceWidth * 0.6}px;
            height: ${deviceHeight * 0.6}px;
          }
        }

        .screen {
          position: relative;
          width: ${screenWidth}px;
          left: ${screenLeft}px;
          top: ${screenTop}px;
        }

        @media(max-width: 1194px) {
          .screen {
            width: ${screenWidth * 0.8}px;
            left: ${screenLeft * 0.8}px;
            top: ${screenTop * 0.8}px;
          }
        }

        @media(max-width: 900px) {
          .screen {
            width: ${screenWidth * 0.6}px;
            left: ${screenLeft * 0.6}px;
            top: ${screenTop * 0.6}px;
          }
        }

        @media(max-width: 722px) {
          .screen {
            width: ${screenWidth * 0.5}px;
            left: ${screenLeft * 0.5}px;
            top: ${screenTop * 0.5}px;
          }
        }

        @media(max-width: 549px) {
          .screen {
            width: ${screenWidth * 0.7}px;
            left: ${screenLeft * 0.7}px;
            top: ${screenTop * 0.7}px;
          }
        }

        @media(max-width: 320px) {
          .screen {
            width: ${screenWidth * 0.6}px;
            left: ${screenLeft * 0.6}px;
            top: ${screenTop * 0.6}px;
          }
        }
      `}</style>
    </div>
  )
}
