import React from 'react'
import { memes } from './fixture/recent.json'

function App() {
  return memes.map((meme) => (
    <img alt={meme.title} key={meme.id} src={meme.images.small.url} />
  ))
}
export default App
