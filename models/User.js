const mongoose = require("mongoose");

const User = mongoose.model("User", {
  firstname: String,
  lastname: String,
  email: String,
  message: String,
});

module.exports = User;
