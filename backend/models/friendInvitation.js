const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendInvitation = new mongoose.Schema({
  senderId : {
    type : Schema.Types.ObjectId,
    ref : 'User',
  },
  receivedId : {
    type : Schema.Types.ObjectId,
    ref: 'User',
  },

});

module.exports = mongoose.model("FriendInvitation", friendInvitation); 
