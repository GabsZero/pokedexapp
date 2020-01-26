const express = require('express')  
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

const db_login = process.env.DB_LOGIN
const db_password = process.env.DB_PASSWORD


mongoose.connect(`mongodb+srv://${db_login}:${db_password}@cluster0-gpxvj.mongodb.net/pokedex?retryWrites=true&w=majority`,
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.listen(3333)