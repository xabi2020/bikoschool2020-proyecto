import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'

const MEMES_URL = 'http://localhost:3000/memes'

function App() {

  const [memes, setMemes] = useState<any>([])

  const getMemes = async () => {
    const response = await fetch(MEMES_URL);
    const json = await response.json();
    return json
  }

  useEffect(() => {
    getMemes()
      .then(setMemes)
      .catch()
  }, []);


  return (
    <>
      <div>Listado de memes</div>
      {
        memes.slice(0, 2).map((element: any) => {
          return <img key={element.id} src={element.images.original.url} alt={element.title} />
        })
      }
    </>
  );
}

export default App;
