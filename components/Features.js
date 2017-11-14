import React from 'react'

export default function Features () {
  return (
    <ul className="features">
      <li>
        <div className="icon"><img src="/static/icon-slider.svg" /></div>
        <span>Calculate feel for any speed + temperature</span>
      </li>
      <li>
        <div className="icon"><img src="/static/icon-wind.svg" /></div>
        <span>Displays current conditions (tap to set sliders!)</span>
      </li>
      <li>
        <div className="icon"><img src="/static/icon-ruler.svg" /></div>
        <span>Uses US or SI units automatically</span>
      </li>

      <style jsx>{`
        .features {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          margin: 60px -15px;
        }

        li {
          margin-bottom: 10px;
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0 15px;
          text-align: center;
          width: 33%;
        }

        .icon {
          height: 50px;
          margin-bottom: 15px;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 410px) {
          .features {
            flex-direction: column;
          }

          li {
            width: auto;
            margin-bottom: 5rem;
            font-size: 2.5rem;
          }
        }
      `}</style>
    </ul>
  )
}
