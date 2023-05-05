import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import UserModel from "../models/user.js";
import verifyPasswordStrength from "../util/verifyPasswordStrength.js"

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and Password are required."
        })
    }

    try {
        const user = await UserModel.findOne({
            username: username.toLowerCase(),
        })

        if (!user) {
            return res
                .status(400)
                .json({ message: "User not found", data: null })
        }

        const doesPasswordMatch = await bcrypt.compare(
            req.body.password,
            user.password
        )

        if (!doesPasswordMatch){
            return res
                .status(400)
                .json ({ message: "Wrong password!", data: null })
        }

        const token = createToken(user._id)

        return res
            .status(200)
            .header("Authorization", `Bearer ${token}`)
            .json ({ message: "Logged in!", data: { user, token }})
    } catch (error) { 
        // FAILURE: Return status 500, which means failure, message = error
        return res.status(500).json({
            message: error
        })
    }
}

export const registerUser = async (req, res) => {
    // Destructuring payload aka request body (request will be in JSON format so we can destructure), REQUEST DATA MUST BE SENT VIA CLIENT
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({
            message: "Username, Password are required."
        })
    }

    if (!verifyPasswordStrength(password)) {
        return res.status(400).json({
            message: "Password must have atleast 8 characters, one uppercase, one lowercase, one number, and one special character!",
            data: null
        })
    }

    try {
        // hashing password
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)

        // reformats username string
        const cleanedUsername = username.toLowerCase().replace(/\s+/g, "") // removes spaces

        // checks if username exists
        const existingUser = await UserModel.findOne({
            $or: [
                { username: cleanedUsername.toLowerCase() }
            ]
        })

        if (existingUser) {
            return res
                .status(400)
                .json({ message: "Username already exists!" })
        }

        // Creating a new user object using the User Model. Assigned the attributes with the values in the payload
        const newUser = new UserModel({
            username: username,
            password: hashedPassword
        })

        // Save the user to the DB, Mongoose will handle everything else
        const registeredUser = await newUser.save()

        // Return status 200, which means success and the message is the registeredUser object
        return res.status(200).json({
            message: "User successfully registered!",
            data: registeredUser
        })
    } catch (error) { 
        // FAILURE: Return status 500, which means failure, message = error
        return res.status(500).json({
            message: error
        })
    }
} 