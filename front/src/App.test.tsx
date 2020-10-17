import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Memes from './memes.json'

describe('listado de memes', () => {
  test('muestra un listado de memes', async () => {
    render(<App />)

    for (let memeItem of Memes) {
      const meme = await screen.findByRole('img', {
        name: memeItem.title,
      })

      expect(meme).toHaveAttribute('src', memeItem.src)
    }
  })

  test('hace una llamada a la api', async () => {
    const fetch = jest.spyOn(window, 'fetch')
    render(<App />)

    expect(fetch).toBeCalledWith('/api/memes')
  })
})
