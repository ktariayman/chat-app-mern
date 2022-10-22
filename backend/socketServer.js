
const authSocket  = require('./middleware/authSocket');
const { addNewUser } = require('./serverStore');
const disconnectHandler = require('./socketHandler/disconnectHandler');
const newConnectionHandler = require('./socketHandler/newConnectionHandler');
const directMessageHandler = require('./socketHandler/directMessageHandler');
const directChatHistoryHandler = require('./socketHandler/directChatHistoryHandler');

const serverStore = require("./serverStore");
const registerSocketServer = (server) => {
  const io = require("socket.io")(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  serverStore.setSocketServerInstance(io);

  // middleware authSocket
  io.use((socket , next) =>  {
    authSocket(socket,next)
})

  const emitOnlineUsers = () =>{
    const onlineUsers =serverStore.getOnlineUsers();

    io.emit('online-users', {onlineUsers})
  }
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);
    newConnectionHandler(socket , io)
    emitOnlineUsers()

    socket.on('direct-message' , (data) => {
      directMessageHandler(socket, data)
    })

    socket.on('direct-chat-history' , (data) => {
      directChatHistoryHandler(socket, data)
    })
    socket.on('disconnect', () => {
      disconnectHandler(socket);
    })

  });

  setInterval(() => { 
    emitOnlineUsers();
  },[10000])

  // new connection handler 
};

module.exports = {
  registerSocketServer,
};
