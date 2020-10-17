import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { memes } from './fixture/recent.json'

describe('Listado de memes', () => {
  it('Debería mostrar el meme Movie Brazil GIF', () => {
    render(<App />)
    expect(
      screen.getByAltText('Movie Brazil GIF by MOODMAN'),
    ).toBeInTheDocument()
  })
  it('Debería mostrar el listado de memes', () => {
    render(<App />)

    for (const meme of memes) {
      const image = screen.queryByRole('img', { name: meme.title })
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', meme.images.small.url)
    }
  })
})
