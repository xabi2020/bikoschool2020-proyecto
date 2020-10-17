import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';
import { count } from 'console';
import variableMemes from '../src/test.json'

describe('renders learn react link', () => {

  it('Muestra un meme',() =>{
    render(<App />)
    expect(screen.getByRole("img",{name:"Movie Brazil GIF by MOODMAN"})).toHaveAttribute('src','https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif')
  })

  it("Muestra varios memes, en el mismo orden que el de las variables que se reciben", () =>{
    render(<App />)
    const arrayDeMemes = variableMemes.memes
    for (let i = 0; i < arrayDeMemes.length; i++) {
      let meme = screen.getByRole("img",{name:arrayDeMemes[i].title})
      expect(meme).toHaveAttribute("alt",arrayDeMemes[i].title)
      expect(meme).toHaveAttribute("src",arrayDeMemes[i].url)
    }
  })
})


