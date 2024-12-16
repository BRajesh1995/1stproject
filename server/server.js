const express = require("express");

const app = express();
require("dotenv").config(); // load env file variables

const connectDB = require("./config/db"); // this is for import DB Connection
const userRouter = require("./routes/userRoutes");

// console.log("server", process.env);
connectDB();

/**
 * Routes
 */
app.use(express.json()); // parse JSON bodies
app.use("/api/users", userRouter);

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
