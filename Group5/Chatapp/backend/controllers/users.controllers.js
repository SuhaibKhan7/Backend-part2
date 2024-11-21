import User from "../models/auth.models.js";

const getUsers = async (req, res) => {
  const userid = req.user._id;
  const userlist = await User.find({ $ne: [{ _id: userid }] }).select(
    "-password"
  );
  if (userlist) {
    res.status(200).json(userlist);
  }
  else{
    res.status(404).json({ message: "No users found" });
  }
};
