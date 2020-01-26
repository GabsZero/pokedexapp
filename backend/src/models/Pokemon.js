const mongoose = require('mongoose')

const PokemonSchema = mongoose.Schema({
    number: Number,
    name: String,
    types: [String],
    avatar_url: String
})

module.exports = mongoose.model('Pokemon', PokemonSchema)