const express = require("express");

const app = express();
require("dotenv").config(); // load env file variables

const connectDB = require("./config/db"); // this is for import DB Connection

console.log("server", process.env);
connectDB();

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
