import React from 'react'

export default function Script ({children}) {
  return (
    <script dangerouslySetInnerHTML={{__html: children.trim() }} />
  )
}
