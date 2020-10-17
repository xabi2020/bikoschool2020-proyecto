import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { memes } from './fixture/recent.json'

describe('Listado de memes', () => {
  it('should show meme with title Movie Brazil GIF', async() => {
    render(<App />)
    expect(
      await screen.findByAltText('Movie Brazil GIF by MOODMAN'),
    ).toBeInTheDocument()
  })
 
  it('should recibe meme list form API', async () => {
    jest.spyOn(window, 'fetch')
    
    render(<App />)

    expect(window.fetch).toBeCalledWith("http://127.0.0.1/")

    for (const meme of memes) {
      const image = await screen.findByRole('img', { name: meme.title })
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', meme.images.small.url)
    }
  })
})
