const { Router } = require('express')
const PokemonController = require('./controllers/PokemonController')

const routes = Router()

routes.get('/pokemon', PokemonController.index)

module.exports = routes