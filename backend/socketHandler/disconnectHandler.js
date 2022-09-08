const serverStore = require('../serverStore');

const disconnectHandler = (socket) =>{
    serverStore.removeConnectUser(socket.id);
}

module.exports = disconnectHandler