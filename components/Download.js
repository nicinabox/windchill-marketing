import React from 'react'

const APP_STORE_URL = 'https://itunes.apple.com/us/app/windchill-easy-windchill-calculator/id1175553238'

export default function Download () {
  return (
    <div className="row app-download align-center">
      <div className="col-xs-6 col-xxs-12 justify-center">
        <div className="media">
          <img src="/static/icon.png" alt="" className="media-image" />

          <div className="media-content">
            <h3>Windchill</h3>
            <span>Free</span>
          </div>
        </div>
      </div>

      <div className="col-xs-6 col-xxs-12 justify-center">
        <a href={APP_STORE_URL} className="app-store-button">
          <img src="/static/appstore.svg" alt="Download on the App Store" />
        </a>
      </div>

      <style jsx>{`
        .media {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-bottom: 2rem;
        }

        .media-image {
          margin-right: 15px;
        }

        .media-content {
          flex: 1;
        }

        .media-content h3 {
          margin: 0;
        }

        .app-download {
          margin: 70px 0;
          padding: 15px;
        }

        .app-store-button {
          display: inline-block;
          border: none;
        }

        .app-store-button img {
          height: 50px;
        }

        @media (max-width: 410px) {
          .col-xxs-12 {
            flex-basis: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
