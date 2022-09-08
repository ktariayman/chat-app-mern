const connectedUsers = new Map();

const addNewUser = ({socketId , userId }) => {

    connectedUsers.set(socketId, {userId});
    console.log("new user added")
    console.log(connectedUsers)
}


const removeConnectUser = (socketId  ) => {

    if(connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log("user removed")
        console.log(connectedUsers)
    }

}


module.exports = {
    addNewUser,
    removeConnectUser
}