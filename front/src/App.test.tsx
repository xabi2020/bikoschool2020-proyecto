import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';
import { count } from 'console';

describe('renders learn react link', () => {

  it('Muestra un meme',() =>{
    render(<App />)
    const meme = screen.getByRole("img",{name:"Movie Brazil GIF by MOODMAN"})
    expect(meme).toBeInTheDocument()
    expect(meme).toHaveAttribute('src','https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif')
  });
});


