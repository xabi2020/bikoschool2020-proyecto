import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Listado de memes', () => {
  it('should be a title in the document', () => {
    render(<App />)
    const titulo = screen.getByText('Listado ', { exact: false })
    expect(titulo).toBeInTheDocument()
  })

  it('should have several images',() => {
    render(<App />)
    const listadoImagenes = screen.getAllByRole('img')
    expect(listadoImagenes.length).toBeGreaterThan(1)
  })
})
