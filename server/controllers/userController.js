const User = require("../models/userModel");

// this is for user register
const userRegister = async (req, res) => {
  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res.send({ success: false, message: "User already exists" });
    }
    const newUser = new User(req.body);
    await newUser.save();
    res.send({
      success: true,
      message: "Registration successfull. Please login to continue ",
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send({
        success: false,
        message: "User not found. Please register first",
      });
    }
    if (req.body.password !== user.password) {
      return res.send({
        success: false,
        message: " Sorry, invalid password entered!",
      });
    }
    res.send({
      success: true,
      message: "You've successfully logged in!",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "An error occurred. Please try again later.",
    });
  }
};

module.exports = { userRegister, userLogin };
