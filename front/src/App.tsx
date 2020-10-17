import React, { useEffect, useState } from 'react'

const App: React.FC = () => {
  const [ memes, setMemes] = useState([]);  
  useEffect(() => {
    fetch("http://127.0.0.1/")
      .then(res => res.json())
      .then(({ memes }) => setMemes(memes))
  }, [])

  return ( 
    <>
      {memes?.map((meme) => (
        <img alt={meme.title} key={meme.id} src={meme.images.small.url} />
      ))}
    </>
  )
}

export default App
