import React from 'react'
import { memes } from './fixture/recent.json'

function App() {
  return memes.map((meme) => (
    <img alt={meme.title} key={meme.id} src="image.gif" />
  ))
}
export default App
