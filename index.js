const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DATABASE CONNECTED"))
  .catch(err => console.log(err))

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("5000", () => {
    console.log("Backend is running on port 5000...");
})