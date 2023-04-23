const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect("mongodb://127.0.0.1:27017/Tripadvisor");

const app = express();
app.use(express.json());

const userRouter = require("./routes/user");

app.use(userRouter);

app.get("*", (req, res) => {
  res.status(404).json("Route non valide");
});

app.listen(3000, (req, res) => {
  console.log("🚀🚀 Serveur Started 🚀🚀");
});
