import React, { useState, useEffect } from 'react';
import api from './services/api'
import PokeCard from './components/pokeCard'
import Nav from './components/layout/nav'

import './App.css'

function App() {
  const [search, setSearch] = useState(null)
  const [pokemons, setPokemons] = useState([])
  async function loadPokemons(){
      const response = await api.get('/pokemon')
      let pokeResponse = null
      if(search){
        pokeResponse = response.data.pokemons.filter(pokemon => {
          return pokemon.name === search
        })

      } else {
        pokeResponse = response.data.pokemons
      }
      setPokemons(pokeResponse)
  }

    useEffect( () => {
        //load the mons for the first time
        loadPokemons()
    }, [])

  return (
    <>
      <div className="text-center">
        <h1>Pokedex</h1>
      </div>
      <Nav setSearch={setSearch} loadPokemons={loadPokemons} />
      <div className="container">
        <PokeCard pokemons={pokemons} search={search} />
      </div>
    </>
  );
}

export default App;
