import io from 'socket.io-client'
let socket = null
export const connectWithSocketServer =() => {
    socket = io('http://localhost:8000')
    socket.on('connect', () => {
        console.log('Connected to socket server')
        console.log(socket.id)
        })
} 