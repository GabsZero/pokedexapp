import React from 'react'

const Pokemon = ({name, number, avatar_url, types}) => {
    return (
        <div className="pokecardContainer col-3 mt-4">
            <a href="#">
                <div className="pokecard card" style={{width: 250}}>
                    <img className="card-img-top" src={avatar_url} alt="pokemon" />
                    <div className="card-body text-center">
                        <h5 className="card-title">Nº {number}</h5>
                        <h4>{name}</h4>
                        {
                            types.map(type => {
                                const customClass = `btn btn success ${type} mr-2`
                                return (
                                    <button className={customClass}>{type}</button>
                                )  
                            })
                        }
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Pokemon