const Pokemon = require('../models/Pokemon')
const axios = require('axios')

module.exports = {
    async index(req, res){
        const pokemons = await Pokemon.find()
        pokemons.sort( (pokeA, pokeB) => {
            let comparison = 0
            if(pokeA.number > pokeB.number) {
                comparison = 1
            } else if(pokeA.number < pokeB.number){
                comparison = -1  
            }

            return comparison
        })

        return res.json({
            pokemons
        })
    },

    async getPokemon(req, res){
        const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.number}`)

        console.log(pokemonData)
        return res.json({
            result: pokemonData.data
        })
    }
}