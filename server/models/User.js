import mongoose, { Schema } from 'mongoose'
mongoose.set('strictQuery', false)

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
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


