import React, { useState, useEffect } from 'react'
import Pokemon from './pokemon'

import './index.css'

const PokeCard = ({pokemons, search}) => {
    

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