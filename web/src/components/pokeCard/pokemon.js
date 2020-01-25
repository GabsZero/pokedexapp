import React from 'react'

const Pokemon = () => {
    return (
        <div className="pokecardContainer col-3 mt-4">
            <a href="#">
                <div className="pokecard card" style={{width: 250}}>
                    <img className="card-img-top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="pokemon" />
                    <div className="card-body text-center">
                        <h5 className="card-title">Nº 001</h5>
                        <h4>Bulbasaur</h4>
                        <button className="btn btn-success grass">Grass</button>
                        <button className="btn btn-success poison ml-2">Poison</button>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Pokemon