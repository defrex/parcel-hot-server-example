import { NextFunction, Request, Response } from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import App from './App'
import Document from './Document'

export default function(req: Request, res: Response, next: NextFunction) {
  if (req.path !== '/') {
    return next()
  }
  const appHtml = ReactDomServer.renderToString(<App />)
  const document = ReactDomServer.renderToString(<Document appHtml={appHtml} />)
  res.status(200).send(document)
}
