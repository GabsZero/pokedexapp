const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
    return res.send('Hello World 2!')
})

module.exports = routes