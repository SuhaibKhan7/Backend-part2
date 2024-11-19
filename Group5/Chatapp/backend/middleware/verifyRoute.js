import jwt from "jsonwebtoken";
import User from "../models/auth.models.js";

const verifyRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(404).send({ message: "Token Not Found" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decodedToken) {
      return res.status(404).send({ message: "Token Invalid" });
    }
    const _id = decodedToken.userid;

    const user = await User.findOne({ _id }).select("-password");

    if (!user) {
      return res.status(404).send({ message: "User not Found" });
    }
    req.user = user;

    next();
  } catch (error) {
    res.status(500).send("internal Server Error", error.message);
  }
};

export default verifyRoute;
