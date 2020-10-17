export interface MemesData {
  id: string
  title: string
  image: {
    width: string
    height: string
    url: string
  }
}

export async function getMemesData(): Promise<MemesData[]> {
  const response = await fetch(
    (process.env.REACT_APP_API_URL as string) + '/memes',
  )
  const memesData: MemesData[] = await response.json()
  return memesData
}
