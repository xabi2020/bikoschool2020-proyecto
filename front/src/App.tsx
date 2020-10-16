import React from 'react'
import memes from './../src/fixtures/memes.json'
const App: React.FC = () => {
  return (
    <>
      <ul>
        {memes.map((meme) => (
          <li key={meme.id}>
            <img src={meme.image.url} alt={meme.title} /> {meme.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
