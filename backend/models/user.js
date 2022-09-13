const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user = new mongoose.Schema({
  email: { type: String, unique: true },
  username: { type: String ,unique: true},
  password: { type: String },
  friends : [{
    type: Schema.Types.Object , 
    ref: 'User'
  }]
});

module.exports = mongoose.model("User", user); 
