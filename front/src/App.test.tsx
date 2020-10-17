import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';
import {memes} from '../src/test.json'

describe('renders learn react link', () => {

  it('Muestra un meme',() =>{
    render(<App />)

    expect(screen.getByRole("img",{name:"Movie Brazil GIF by MOODMAN"})).toHaveAttribute('src','https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif')
  })

  it("Muestra varios memes, en el mismo orden que el de las variables que se reciben", () =>{
    render(<App />)

    for (let i = 0; i < memes.length; i++) {
      let meme = screen.getByRole("img",{name:memes[i].title})
      expect(meme).toHaveAttribute("alt",memes[i].title)
      expect(meme).toHaveAttribute("src",memes[i].url)
    }
  })
})


