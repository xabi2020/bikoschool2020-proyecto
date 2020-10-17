import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import db from './db.json'


function App() {

  const [memes, setMemes] = useState([])
  

  return (
    <>
    <div>Listado de memes</div>
    {db.memes.slice(0, 2).map(element => <img src={element.images.original.url} alt={element.title}/>)}
    </>
  );
}

export default App;
