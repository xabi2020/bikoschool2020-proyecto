import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';
import { count } from 'console';

describe('renders learn react link', () => {

  it('Muestra un meme',() =>{
    render(<App />)
    const memesArray = screen.getAllByLabelText('meme')
    expect(memesArray.length).toEqual(50)
  });
});


