import jwt from "jsonwebtoken";
import User from "../model/auth.models.js";
// For Auth0 token verification

const verifyRoute = async (req, res, next) => {
  try {
    const cookieToken = req.cookies.jwt;
    if (cookieToken) {
      const decodedToken = jwt.verify(cookieToken, process.env.JWT_SECRET_KEY);
      if (!decodedToken) {
        return res.status(403).send({ message: "Invalid custom JWT token." });
      }

      const user = await User.findById(decodedToken.userid).select("-password");
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

      // Attach user ID to the request
      req.userid = user._id;
      next();
    } else {
      // No valid token provided
      return res
        .status(401)
        .send({ message: "No token provided. Please login." });
    }
  } catch (error) {
    console.error("Verification Error:", error.message);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export default verifyRoute;
