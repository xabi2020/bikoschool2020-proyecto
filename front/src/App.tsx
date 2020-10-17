import React from 'react'
import { getMemesData, MemesData } from './services/getMemesData'

const App: React.FC = () => {
  const [memesData, setMemesData] = React.useState<MemesData[]>([])
  React.useEffect(() => {
    getMemesData().then((data) => {
      setMemesData(data)
    })
  }, [])

  return (
    <>
      <ul>
        {memesData.map((meme) => (
          <li key={meme.id}>
            <img src={meme.image.url} alt={meme.title} /> {meme.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
