const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DATABASE CONNECTED"))
  .catch(err => console.log(err))

app.listen("5000", () => {
    console.log("Backend is running...");
})