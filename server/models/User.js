import mongoose, { Schema } from 'mongoose'
mongoose.set('strictQuery', false)

const UserSchema = new Schema(
    {
        id: {
            type: Number,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const UserModel = mongoose.model("User", UserSchema)

export default UserModel


