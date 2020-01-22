import React from 'react';
import PokeCard from './components/pokeCard'
import Nav from './components/layout/nav'

import './App.css'

function App() {
  return (
    <>
      <div className="text-center">
        <h1>Pokedex</h1>
      </div>
      <Nav />
      <div className="container">
        <PokeCard />
      </div>
    </>
  );
}

export default App;
