const authSocket = require('./middleware/authSocket' ) ;
const registerSocketServer = (server) => {
    const io = require('socket.io')(server , {
        cors :{
            origin : "*",
            methods : ["GET","POST"]
        }
    })

    io.use( (socket , next) =>{
        authSocket(socket, next)
    })

    io.on('connection', (socket) => {

            console.log("user connected from backend with id :" , socket.id)

            // new connection handler 
        })
}

module.exports = {registerSocketServer}