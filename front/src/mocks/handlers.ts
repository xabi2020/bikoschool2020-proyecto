import { rest } from 'msw'
import recents from "../fixture/recent.json";

export const handlers = [
  rest.get('http://127.0.0.1/', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json(recents)
    )
  )
]