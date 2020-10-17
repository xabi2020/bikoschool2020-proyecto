import React from 'react';
import arrayMemes from '../src/test.json'

function App() {
  return (
    <>
        {arrayMemes.memes.map((meme) => 
          <img src={meme.url} alt={meme.title}></img>
        )}
    </>
  );
}

export default App;
