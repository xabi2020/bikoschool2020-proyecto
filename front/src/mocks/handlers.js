// src/mocks/handlers.js
import { rest } from 'msw'
import memes from '../test.json'

export const handlers = [
  // Handles a GET /user request
  rest.get('/memes', (req,res,ctx) =>{
    return res(
        ctx.status(200),
        ctx.json(memes),
      )
  }),
]