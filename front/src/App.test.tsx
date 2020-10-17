import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import Memes from './memes.json'

describe('listado de memes', () => {
  test('muestra el meme Movie Brazil', () => {
    render(<App />)

    const meme = screen.getByRole('img', {
      name: 'Movie Brazil GIF by MOODMAN',
    })
    expect(meme).toBeInTheDocument()

    expect(meme).toHaveAttribute(
      'src',
      'https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif',
    )
  })

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
