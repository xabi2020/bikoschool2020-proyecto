import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('muestra el meme Movie Brazil', () => {
  render(<App />)

  expect(screen.getByText(/Movie Brazil GIF by MOODMAN/i)).toBeInTheDocument()
})
