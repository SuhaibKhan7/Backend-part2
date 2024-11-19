import User from "../model/auth.models.js";
import generateJWT from "../utilities/generatejwt_cookies.js";

import bcrypt from "bcrypt";
export const singup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmpassword, gender } =
      req.body;
    // console.log(req.body)
    if (password != confirmpassword) {
      return res.status(400).send({ message: "Password mismatch....." });
    }
    const user = await User.findOne({ username });

    if (user) {
      console.log(user);
      return res.status(400).send({ message: "User already Exist" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const boypic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlpic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newuser = new User({
      fullname,
      username,
      email,
      password: hashpassword,
      gender,
      profilepic: gender == "male" ? boypic : girlpic,
    });

    await newuser.save();

    res.status(201).json({
      _id: newuser._id,
      fullname: newuser.fullname,
      username: newuser.username,
      email: newuser.email,
      gender: newuser.gender,
      profilepic: newuser.profilepic,
    });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  const isvalidpassword = await bcrypt.compare(
    password,
    user ? user.password : " "
  );

  if (!user || !isvalidpassword) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  generateJWT(user._id, res);

  res.status(201).json({
    _id: user._id,
    fullname: user.fullname,
    username: user.username,
    email: user.email,
    gender: user.gender,
    profilepic: user.profilepic,
  });
};

export const logout = (req, res) => {
  res.cookie("jwt", " ", {
    maxAge: 0,
  });
  res.status(200).send({ message: "Logout Successfully" });
};
