import jwt from "jsonwebtoken"
const generateJWT = (userid, res) => {

    const token = jwt.sign({ userid }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d"
    })
    res.cookie("jwt", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000, //ms,
        httpOnly: false,
        secure: false
    })
    res.status(200).send("Cookie Successfully Send")

}
export default generateJWT