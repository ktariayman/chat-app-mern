const serverStore = require("../serverStore.js")
const friendsUpdate = require("./updates/friends");

const newConnectionHandler = async (socket , io) => {
    const user = socket.user

serverStore.addNewUser({
    socketId : socket.id,
    userId : user.userId

})
    // update pending Invitation List
    friendsUpdate.updateFriendsPendingInvitation(user.userId)
    // update friends List
    friendsUpdate.updateFriends(user.userId)


}

module.exports = newConnectionHandler