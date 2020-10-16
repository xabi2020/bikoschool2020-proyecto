import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('List of memes', () => {
  it('has a list of memes including "Movie Brazil GIF by MOODMAN"', async () => {
    render(<App />)

    const boulbasourTextElement = await screen.findByText(
      /Movie Brazil GIF by MOODMAN/i,
    )

    expect(boulbasourTextElement).toBeInTheDocument()
  })
})
