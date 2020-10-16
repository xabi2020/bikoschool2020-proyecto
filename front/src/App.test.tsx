import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';
import { count } from 'console';

describe('renders learn react link', () => {

  it('Muestra un meme',() =>{
    render(<App />)
    expect(screen.getByText("Movie Brazil GIF by MOODMAN")).toBeInTheDocument()
  });
});


