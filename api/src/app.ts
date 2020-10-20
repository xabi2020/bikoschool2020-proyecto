import { DatabaseSchema } from 'databaseSchema'
import express from 'express'
import Lowdb from 'lowdb'
import logger from 'morgan'

import { routes } from './routes'

export function createApp(db: Lowdb.LowdbSync<DatabaseSchema>) {
  const app = express()

  // Shows request log on terminal
  // https://github.com/expressjs/morgan
  app.use(logger('combined'))

  // Añade el adaptador de la base de datos en cada petición
  app.use((req, _res, next) => {
    req.context = { db }
    next()
  })

  // Parses incoming requests with JSON payloads
  // http://expressjs.com/es/api.html#express.json
  app.use(express.json())

  // Parses incoming requests with urlencoded payloads
  // http://expressjs.com/es/api.html#express.urlencoded
  app.use(express.urlencoded({ extended: false }))

  app.use('/api', routes)

  return app
}
