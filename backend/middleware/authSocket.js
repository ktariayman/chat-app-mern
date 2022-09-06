const jwt = require('jsonwebtoken');

const config = process.env

const verifyTokenSocket = (socket , next ) =>{
    const token = socket.handshake.auth?token;
    try {
        const decoded = jwt.verify(token , config.TOKEN_KEY ) 
        socket.user = decoded
    } catch (error) {

        const socketError = new Error('Not authorized');
        return next(socketError);
    }
    next()
}

module.exports = verifyTokenSocket