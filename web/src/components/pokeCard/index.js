import React from 'react'
import Pokemon from './pokemon'

import './index.css'

const PokeCard = ({pokemons, search}) => {
    
    //if no mons, show something
    if(pokemons.length === 0) return (
        <div className="text-center mt-5">
            <h4>No pokemons to show</h4>
        </div>
    )

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