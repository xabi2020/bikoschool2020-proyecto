import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Listado de memes', () => {
  it('Should show a meme', () => {
    render(<App />)
    const meme = screen.getByRole('img', { name: 'Meme de shrek' })
    expect(meme).toBeInTheDocument()
    expect(meme).toHaveAttribute(
      'src',
      'https://i.pinimg.com/originals/52/8M6/fe/5286fe86fbdd8ec13c4e81bde0e3dfdf.jpg',
    )
  })
})
