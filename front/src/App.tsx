import React from 'react'
import { getMemes, Meme } from './services/getMemes'

const App: React.FC = () => {
  const [memes, setMemes] = React.useState<Meme[]>()
  React.useEffect(() => {
    getMemes().then(setMemes)
  }, [])
  return (
    <>
      {memes?.map((meme: Meme) => (
        <img alt={meme.title} src={meme.url} key={meme.id} />
      ))}
    </>
  )
}

export default App
