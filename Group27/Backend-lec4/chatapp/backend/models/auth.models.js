import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female","Other"],
        required: true
    },
    profilepic: {
        type: String,
        default: ""
    }
})
const User = mongoose.model("user", userSchema)
export default User