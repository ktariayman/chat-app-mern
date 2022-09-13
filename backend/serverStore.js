const connectedUsers = new Map();
let io = null;
const setSocketServerInstance = (ioInstance) => {
    io = ioInstance;
  };
  const getSocketServerInstance = () => {
    return io;
  };
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

const getActiveConnections = (userId  ) => {
    const activeConnections =[]
    connectedUsers.forEach( (key,value) =>{
        if(value.userId === userId){
            activeConnections.push(key)
    }})

    return activeConnections
}


const getOnlineUsers = () => {
    const onlineUsers = [];
  
    connectedUsers.forEach((value, key) => {
      onlineUsers.push({ socketId: key, userId: value.userId });
    });
  
    return onlineUsers;
  };


module.exports = {
    addNewUser,
    removeConnectUser,
    getActiveConnections,
    getOnlineUsers,
    setSocketServerInstance,
    getSocketServerInstance,
  
}