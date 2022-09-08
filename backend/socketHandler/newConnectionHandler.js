const serverStore = require("../serverStore.js")

const newConnectionHandler = async (socket , io) => {
    const user = socket.user

serverStore.addNewUser({
    socketId : socket.id,
    userId : user.userId

})}

module.exports = newConnectionHandler