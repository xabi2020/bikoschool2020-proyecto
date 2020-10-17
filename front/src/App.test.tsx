import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { server } from './mocks/server'
import { rest } from 'msw'
import App from './App'
import { memes } from './fixture/recent.json'
import searchResultMovie from './fixture/search_movie.json'

describe('Listado de memes', () => {
  it('should recibe meme list from API', async () => {
    render(<App />)

    for (const meme of memes) {
      const image = await screen.findByRole('img', { name: meme.title })
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', meme.images.small.url)
    }
  })
  it('should show message error if the request fail', async () => {
    server.use(
      rest.get('http://127.0.0.1/', (_, res, ctx) => res(ctx.status(500))),
    )
    render(<App />)

    expect(await screen.findByRole('alert')).toHaveTextContent('Oops!')
  })
})

describe('Search memes', () => {
  it('User should have a search', () => {
    render(<App />)

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })
  it('Should show the results from user search', async () => {
    jest.spyOn(window, 'fetch')

    render(<App />)
    const inputSearch = screen.getByRole('searchbox')
    fireEvent.change(inputSearch, { target: { value: 'movie' } })

    for (const meme of searchResultMovie.memes) {
      const image = await screen.findByRole('img', { name: meme.title })
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', meme.images.small.url)
    }

    expect(window.fetch).toBeCalledWith('http://127.0.0.1/search?movie')
  })
})
