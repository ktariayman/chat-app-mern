const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String ,unique: true},
  password: { type: String },
});

module.exports = mongoose.model("user", user); 
