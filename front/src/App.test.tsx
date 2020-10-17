import React from 'react'
import { render, screen } from '@testing-library/react'
import { server } from './mocks/server'
import { rest } from 'msw'
import App from './App'
import { memes } from './fixture/recent.json'

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
