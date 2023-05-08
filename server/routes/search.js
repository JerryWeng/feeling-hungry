import express from "express";

// Controller functions will be imported here
import {
    nearbySearch
} from '../controllers/searchController.js'

// Create a Router object so Express knows that you will have routes, assigned into variable AuthRoute
const SearchRoute = express.Router()

// TLDR: an event listener on a defined URL. Whenever a certain request is made on that URL, run callback/handler/controller
SearchRoute.post('/', nearbySearch)

export default SearchRoute