import { Router } from 'express'
import Lowdb from 'lowdb'
import { DatabaseSchema } from './databaseSchema'

export function createRoutes(db: Lowdb.LowdbSync<DatabaseSchema>) {
  const routes = Router()

  routes.get('/memes', (req, res) => {
    const memes = db.get('memes').take(50).value()

    res.status(200).json(memes)
  })

  return routes
}
