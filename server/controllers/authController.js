import mongoose from "mongoose";
import UserModel from "../models/User.js";

export const registerUser = async (req, res) => {
    // Destructuring payload aka request body (request will be in JSON format so we can destructure), REQUEST DATA MUST BE SENT VIA CLIENT
    const { id, username, password } = req.body

    if (!id || !username || !password) {
        return res.status(400).json({
            message: "ID, Username, Password are required."
        })
    }

    try {
        // Creating a new user object using the User Model. Assigned the attributes with the values in the payload
        const newUser = new UserModel({
            id: id,
            username: username,
            password: password
        })

        // Save the user to the DB, Mongoose will handle everything else
        const registeredUser = await newUser.save()

        // Return status 200, which means success and the message is the registeredUser object
        return res.status(200).json({
            message: registeredUser
        })
    } catch (error) { 
        // FAILURE: Return status 500, which means failure, message = error
        return res.status(500).json({
            message: error
        })
    }

} 