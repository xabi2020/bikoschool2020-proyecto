import { rest } from 'msw'
import memes from './../fixtures/memes.json'

export const handlers = [
  rest.get('https://localhost:3001/api/v1/memes', (req, res, ctx) =>
    res(ctx.status(200), ctx.json(memes)),
  ),
]
