import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Memes from './memes.json'

test('muestra el meme Movie Brazil', () => {
  render(<App />)

  expect(screen.getByText('Movie Brazil GIF by MOODMAN')).toBeInTheDocument()
})

test('muestra un listado de memes', () => {
  render(<App />)

  for (let meme of Memes) {
    expect(screen.getByText(meme.title)).toBeInTheDocument()
  }
})
