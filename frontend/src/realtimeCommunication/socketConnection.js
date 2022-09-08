import io from 'socket.io-client';

let socket =null
export const connectWithSocketServer = (user) =>{
    const jwtToken = user.token
    socket = io('http://localhost:8000', {
        auth : {
            token : jwtToken,
        }
    }) 

   
    socket.on('connect', () => {
        console.log('Connected to socket server');
        console.log(socket.id);
            
    });
        
}