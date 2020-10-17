// src/mocks/handlers.js
import { rest } from 'msw'
import Memes from '../memes.json'

export const handlers = [
  rest.get('/api/memes', (req, res, ctx) => {
    // Return a mocked memes list
    return res(ctx.status(200), ctx.json(Memes))
  }),
]
