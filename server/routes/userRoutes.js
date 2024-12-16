const express = require("express");
const { userRegister, userLogin } = require("../controllers/userController");

const userRouter = express.Router();

// register a user

userRouter.post("/register", userRegister);

//login
userRouter.post("/login", userLogin);

module.exports = userRouter;
