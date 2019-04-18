import React from 'react'

interface DocumentProps {
  appHtml: string
}

export default function Document({ appHtml }: DocumentProps) {
  return (
    <html>
      <head>
        <title>Parcel Hot Server Example</title>
      </head>
      <body>
        <div id='app' dangerouslySetInnerHTML={{ __html: appHtml }} />
        <script src='/dist/client.js' />
      </body>
    </html>
  )
}
