

import User from "../models/auth.models.js"
import bcrypt from "bcrypt"
import generatejwt from "../utilities/jwt_cookies-gen.js"
export const signup = async (req, res) => {
    const { fullname, username, email, password, confirmpassword, gender } = req.body
    try {


        console.log(req.body)
        if (password != confirmpassword) {
            return res.status(401).send("Password Doesn't Match")
        }
        const user = await User.findOne({ username })

        if (user) {
            return res.status(401).send("User already Exist")
        }
        const passwordHash = await bcrypt.hash(password, 10)
        console.log(passwordHash)
        const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const newuser = new User({
            fullname,
            username,
            email,
            password: passwordHash,
            gender,
            profilepic: gender == "male" ? boypic : girlpic
        })
        await newuser.save();
        res.status(200).json({
            _id: newuser._id,
            fullname: newuser.fullname,
            username: newuser.username,
            email: newuser.email,
            gender: newuser.gender,
            profilepic: newuser.profilepic
        })
    }
    catch (error) {
        res.status(500).send("Internal server Error", error.message)
    }




}
export const login = async (req, res) => {

    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })

        const isvalidPassword = await bcrypt.compare(password, user ? user.password : " ");

        if (!user || !isvalidPassword) {
            return res.status(400).send("Invalid Username or Password")
        }
        console.log(user._id)
        generatejwt(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            email: user.email,
            gender: user.gender,
            profilepic: user.profilepic
        })
    } catch (error) {
        res.status(500).send("Internal server Error", error.message)
    }
}
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", " ", {
            maxAge: 0
        })
        res.status(200).send({ message: "Logout Successfully" })

    } catch (error) {
        res.status(500).send("Internal Server Error", error.message)
    }   
}