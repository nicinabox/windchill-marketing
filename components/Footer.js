import React from 'react'

export default function Footer () {
  return (
    <div className="footer">
      <p>
        Made with all the ❤ in the world by <a href="https://twitter.com/nicinabox">@nicinabox</a>.{' '}
        Windchill is free to download and ad-supported with options to remove ads. Icons are Creative Commons.{' '}
        Adjust by Setyo Ari Wibowo from the Noun Project. Sun Wind by Ricardo Cardoso from the Noun Project. Ruler by Ian Dannister from the Noun Project.
      </p>

      <style jsx>{`
        .footer {
          display: flex;
          opacity: 0.6;
          margin-top: 40px;
          font-size: 13px;
        }
      `}</style>
    </div>
  )
}
