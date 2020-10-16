import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Listado de memes', () => {
  it('Debería mostrar el meme Movie Brazil GIF', () => {
    render(<App />)

    expect(screen.getByText('Movie Brazil GIF')).toBeInTheDocument()
  })
})
