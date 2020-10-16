import React from 'react'
import Memes from './memes.json'

const App: React.FC = () => {
  return (
    <section>
      {Memes.map((meme) => (
        <div key={meme.id}>
          <p>{meme.title}</p>
          <img title={meme.title} />
        </div>
      ))}
    </section>
  )
}

export default App
