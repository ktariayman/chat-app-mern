import io from 'socket.io-client';
import { setPendingInvitations } from '../store/actions/friendActions';

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

    socket.on('freinds-invitations' , (data) =>{
        const {pendingInvitations} =data
        store.dispatc(setPendingInvitations(data))
    })
        
}