export interface Meme {
  id: string
  title: string
  url: string
}

export async function getMemes(): Promise<Meme[]> {
  const apiResponse = await fetch('/api/memes')
  const result = apiResponse.json()
  return result
}
