import React from 'react'
import Pokemon from './pokemon'

import './index.css'

const PokeCard = () => {
    return (
        <>
            <div className="row">
                <Pokemon />       
                <Pokemon />       
                <Pokemon />       
                <Pokemon />       
                <Pokemon />       
                <Pokemon />       
                <Pokemon />       
            </div>
        </>
    )
}

export default PokeCard