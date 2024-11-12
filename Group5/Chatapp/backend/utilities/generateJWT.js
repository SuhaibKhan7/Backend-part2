import jwt from "jsonwebtoken"
const generateJWT = async(userid, res) => {

    const token =  jwt.sign({ userid }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d"
    })
    res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, //ms,
        httpOnly: false,
        secure: false
    })
   

}
export default generateJWT