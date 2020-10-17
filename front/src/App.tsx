import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'



function App() {

  const [memes, setMemes] = useState<any>([])

  async function fetchUrl(url: string) {
    debugger
    const response = await fetch(url);
    const json = await response.json();
    debugger
    setMemes(json);
  }

  useEffect(() => {
   fetchUrl('http://localhost:3000/memes')
  }); 


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
