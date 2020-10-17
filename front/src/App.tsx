import React from 'react'
import Memes from './memes.json'

const App: React.FC = () => {
  return (
    <>
      {Memes.map((meme) => (
        <img alt={meme.title} src={meme.src} key={meme.id} />
      ))}
    </>
  )
}
export default App
