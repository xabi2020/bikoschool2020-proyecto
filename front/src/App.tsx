import React, { useEffect, useState } from 'react'

interface Meme {
  title: string
  id: string
  images: {
    small: {
      url: string
    }
  }
}

async function getMemes(): Promise<Meme[]> {
  const response = await fetch('http://127.0.0.1/')
  const { memes } = await response.json()
  return memes
}

const App: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([])

  useEffect(() => {
    getMemes().then(setMemes)
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
