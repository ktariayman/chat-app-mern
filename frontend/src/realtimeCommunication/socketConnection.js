import io from 'socket.io-client'

export const connectWithSocketServer =(user) => {
    socket = io('http://localhost:8000')
    socket.on('connect', () => {
        console.log('Connected to socket server')
        console.log(socket.id)
        })
} 