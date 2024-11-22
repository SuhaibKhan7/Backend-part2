import User from "../models/auth.models.js";
const getUsers = async (req, res) => {
  const loginUserId = req.user._id;
  const userList = await User.find({ _id: { $ne: loginUserId } }).select(
    "-password"
  );
  if (!userList) {
    res.status(404).send({ message: "No User Found" });
  } else {
    res.status(200).send(userList);
  }
};
export default getUsers;
