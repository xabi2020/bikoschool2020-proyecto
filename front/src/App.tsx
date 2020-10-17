import React from 'react'

interface Meme {
  id: string
  title: string
  src: string
}

const App: React.FC = () => {
  const [memes, setMemes] = React.useState<Meme[]>()
  React.useEffect(() => {
    getMemes().then(setMemes)
  }, [])
  return (
    <>
      {memes?.map((meme: Meme) => (
        <img alt={meme.title} src={meme.src} key={meme.id} />
      ))}
    </>
  )
}

async function getMemes(): Promise<Meme[]> {
  const apiResponse = await fetch('/api/memes')
  const result = apiResponse.json()
  return result
}

export default App
