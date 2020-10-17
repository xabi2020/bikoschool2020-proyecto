import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import db from './db.json'

describe('Listado de memes', () => {


  it('should show a list of memes', () => {
    render(<App />)

    db.memes.slice(0, 2).forEach(element => {
      const meme = screen.getByRole('img', { name: element.title })
      expect(meme).toBeInTheDocument()
      expect(meme).toHaveAttribute(
        'src',
        element.images.original.url,
      )
    });

  })

})
