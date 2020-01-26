import React, { useState, useEffect } from 'react'
import Pokemon from './pokemon'
import api from '../../services/api'

import './index.css'

const PokeCard = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect( () => {
        async function loadPokemons(){
            const response = await api.get('/pokemon')
            setPokemons(response.data.pokemons)
        }

        loadPokemons()
    }, [])

    return (
        <>
            <div className="row">
                {
                    pokemons.map( pokemon => (
                        <Pokemon 
                            key={pokemon._id} 
                            number={pokemon.number}
                            name={pokemon.name}
                            types={pokemon.types}
                            avatar_url={pokemon.avatar_url}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default PokeCard