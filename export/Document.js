import React from 'react'

export default ({ head, css, html }) => {
  return <html>
    <head>
      {(head || []).map((h, i) => React.cloneElement(h, { key: i }))}
      <style dangerouslySetInnerHTML={{ __html: css }} />
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </body>
  </html>
}
