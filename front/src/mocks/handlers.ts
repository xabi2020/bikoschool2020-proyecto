import { rest } from 'msw'
import recents from '../fixture/recent.json'
import searchMovieResult from '../fixture/search_movie.json'

export const handlers = [
  rest.get('http://127.0.0.1/', (req, res, ctx) => {
    const search = req.url.searchParams.get('search')
    if (search === 'movie') {
      return res(ctx.status(200), ctx.json(searchMovieResult))
    }
    return res(ctx.status(200), ctx.json(recents))
  }),
]
