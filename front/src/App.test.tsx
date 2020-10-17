import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Memes from './memes.json'

describe('listado de memes', () => {
  test('muestra un listado de memes', () => {
    render(<App />)

    for (let memeItem of Memes) {
      const meme = screen.getByRole('img', {
        name: memeItem.title,
      })

      expect(meme).toHaveAttribute('src', memeItem.src)
    }
  })
})
