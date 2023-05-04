import express from "express";

// Controller functions will be imported here
import {
    registerUser
} from '../controllers/authController.js'

// Create a Router object so Express knows that you will have routes, assigned into variable AuthRoute
const AuthRoute = express.Router()

// TLDR: an event listener on a defined URL. Whenever a certain request is made on that URL, run callback/handler/controller
AuthRoute.post('/register', registerUser)


export default AuthRoute