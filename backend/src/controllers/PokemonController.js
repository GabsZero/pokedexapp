const Pokemon = require('../models/Pokemon')

module.exports = {
    async index(req, res){
        const pokemons = await Pokemon.find()
        return res.json({
            pokemons
        })
    }
}