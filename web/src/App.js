import React, { useState, useEffect } from 'react';
import api from './services/api'
import PokeCard from './components/pokeCard'
import Nav from './components/layout/nav'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css'

function App() {
  const [search, setSearch] = useState(null)
  const [pokemons, setPokemons] = useState([])
  async function loadPokemons(){
      const response = await api.get('/pokemon')
      let pokeResponse = null
      if(search){
        pokeResponse = response.data.pokemons.filter(pokemon => {
          return pokemon.name.toLowerCase() === search
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
      <Router>
        <Switch>
          <Route path="/" exact={true} render={() => (
            <>
              <Nav setSearch={setSearch} loadPokemons={loadPokemons} />
              <div className="container">
                <PokeCard pokemons={pokemons} search={search} />
              </div>
            </>
          )} />
          <Route path="/pokemon">
           <h1>Pokemon</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
