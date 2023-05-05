import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import AuthRoute from './routes/auth.js'

const app = express()

mongoose.set('strictQuery', false)

app.use(express.json()) // Allows for requests to be read as JSON
app.use( // Allows for client and server
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        exposedHeaders: ['Authorization'],
    })
)

app.use((req, res, next) => { // Whenever a request is made, log out what happened
    console.log(req.method)
    next()
})

// Defining the routes for the server to listen on, transitive relationship
app.use('/api/auth', AuthRoute)

mongoose
    .connect(process.env.REACT_APP_MONGO_URL)
    .then(() => {
        //listen for requests
        app.listen(process.env.REACT_APP_PORT, () => {
            console.log('connected to db and listening on port', process.env.REACT_APP_PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
