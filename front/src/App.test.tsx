import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import db from './db.json'


describe('Listado de memes', () => {

  it('should show a list of memes', async () => {
    render(<App />)

    db.memes.slice(0, 2).forEach( async element => {
      const meme = await screen.findByRole('img', { name: element.title })
      expect(meme).toBeInTheDocument()
      expect(meme).toHaveAttribute(
        'src',
        element.images.original.url,
      )
    });
  })

  it.only('Should call the api', async () => {
    jest.spyOn(window, 'fetch') // Fase de arrange
    render(<App />)
    const meme = await screen.findAllByRole('img')
    expect(window.fetch).toBeCalledWith('/api/memes')
  })

})
