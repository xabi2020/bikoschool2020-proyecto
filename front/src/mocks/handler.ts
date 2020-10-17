import { rest } from 'msw'
import db from '../db.json'

export const handlers = [
    rest.get('http://localhost:3000/memes', (req, res, ctx) => {
      return res(
        ctx.status(400),
        ctx.json({memes: [{title: "asdf"}]})
      )
    }),
  ]