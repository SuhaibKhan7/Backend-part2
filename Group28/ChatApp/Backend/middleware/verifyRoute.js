import jwt from "jsonwebtoken";
import User from "../model/auth.models.js";
const verifyRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).send({ message: "Token not Found Please login" });
    }

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decodeToken) {
      return res.status(403).send({ message: "Token Invalid" });
    }

    const user = await User.findById(decodeToken.userid).select("-password");
                                    
    console.log("***************");
   
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }
    req.userid = user._id;

    next();
  } catch (error) {
    return res.status(500).send("Internal Server Error", error.message);
  }
};
export default verifyRoute;
