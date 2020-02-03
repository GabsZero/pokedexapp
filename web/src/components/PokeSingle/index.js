import React, {useState, useEffect } from 'react'
import api from '../../services/api'
import './pokeSingle.css'

const PokeSingle = ({ number }) => {

    const [pokemon, setPokemon] = useState(null)
    

    useEffect( () => {
        async function loadSinglePokemon(){
            const response = await api.get(`/pokemon/${number}`)
            
            const {id, name, sprites, types, weight} = response.data.result
            
            setPokemon({
                id,
                name,
                sprites,
                types,
                weight
            })
            
        }
        loadSinglePokemon()
    }, [])
    
    if(pokemon){
        return (
            <>
            
                <div className="box-name">
                    <h2>{pokemon.name}</h2>
                </div>
                <div className="row">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={pokemon.sprites.front_default} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 style={{textTransform: "capitalize"}} className="card-title">{pokemon.name}</h5>
                                    <p className="card-text">
                                        Type: { 
                                            pokemon.types.map( slot => {
                                                console.log(slot)
                                                return slot.type.name + ' '
                                            })
                                        }
                                        Weight: {pokemon.weight}Kgs
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="container text-center mt-5">
            <h2>Loading pokemon</h2>
        </div>
    )

}

export default PokeSingle