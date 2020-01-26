const Pokemon = require('../models/Pokemon')

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

        console.log(pokemons)
        return res.json({
            pokemons
        })
    }
}