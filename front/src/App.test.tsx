import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import memes from './fixtures/memes.json'

describe('List of memes', () => {
  it('should show memes', async () => {
    render(<App />)

    for (let meme of memes) {
      const memeTextElement = await screen.findByText(meme.title)
      expect(
        await screen.findByRole('img', { name: meme.title }),
      ).toHaveAttribute('src', meme.image.url)
      expect(memeTextElement).toBeInTheDocument()
    }
  })
})
