require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { default: AuthRoute } = require('./routes/auth')

const app = express()

mongoose.set('strictQuery', false)

app.use(express.json()) // Allows for requests to be read as JSON
app.use(
    // Allows for client and server to communicate on different ports
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        exposedHeaders: ['Authorization'],
    })
)

app.use((req, res, next) => {
    // Whenever a request is made, log out what happened
    console.log(req.method)
    next()
})

// Defining the routes for the server to listen on, transitive relationship
app.use('/api/auth', AuthRoute)

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
