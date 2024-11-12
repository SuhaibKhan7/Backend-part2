import jwt from "jsonwebtoken";
import User from "../models/auth.models.js";

const verifyRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(404).send({ message: "Token not Found" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedToken);

    if (!decodedToken) {
      return res.status(401).send({ message: "Token invalid" });
    }
    console.log(decodedToken.userid);

    const _id = decodedToken.userid;
    
    const user = await User.findOne({ _id }).select("-password");

    console.log(user);
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }
    console.log(user);
    req.user = user;
    console.log("Verify Route");
    next();
  } catch (error) {
    return res.status(500).send("Internal Server Error", error.message);
  }
};
export default verifyRoute;
