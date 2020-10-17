import React from 'react';
import {memes} from '../src/test.json'

function App() {
  return (
    <>
        {memes.map((meme) => 
          <img src={meme.url} alt={meme.title}></img>
        )}
    </>
  );
}

export default App;
