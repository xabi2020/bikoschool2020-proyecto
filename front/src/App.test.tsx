import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import memes from './fixtures/memes.json'

describe('List of memes', () => {
  it('has a list of memes including "Movie Brazil GIF by MOODMAN"', async () => {
    render(<App />)

    const movieBrazilTextElement = await screen.findByText(
      /Movie Brazil GIF by MOODMAN/i,
    )

    expect(movieBrazilTextElement).toBeInTheDocument()
  })

  it('has a list of memes', async () => {
    render(<App />)

    for (let meme of memes) {
      const memeTextElement = await screen.findByText(meme.title)
      expect(memeTextElement).toBeInTheDocument()
    }
  })

  it('retrieves the memes retrieved from the API', async () => {
    jest.spyOn(window, 'fetch')

    render(<App />)

    expect(window.fetch).toHaveBeenCalledWith(
      'https://localhost:3001/api/v1/memes',
    )
  })
})
