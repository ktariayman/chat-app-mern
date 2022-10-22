import io from 'socket.io-client';
import { setPendingInvitations , setFriends , setOnlineUsers} from '../store/actions/friendActions';
import store from '../store/store'
let socket =null
export const connectWithSocketServer = (user) =>{
    const jwtToken = user.token
    socket = io("http://localhost:8000", {
        auth : {
            token : jwtToken,
        }
    }) 


    socket.on("connect", () => {
        console.log('Connected to socket server');
        console.log(socket.id);
    });

    socket.on("friends-invitations" , (data)  => {
        const {pendingInvitations} =data
        store.dispatch(setPendingInvitations(pendingInvitations))
    })
    socket.on("friends-list" , (data)  => {
        const {friends} =data
        store.dispatch(setFriends(friends))
    })
    socket.on("online-users" , (data)  => {
        const {onlineUsers} =data
        store.dispatch(setOnlineUsers(onlineUsers))
    })
    socket.on("direct-chat-history" , (data)  => {
        console.log("direct-chat-history came from the server")
        console.log(data)
    })
}

export const sendDirectMessage = (data) => {
    console.log(data)
    socket.emit("direct-message", data)
}


export const getDirectChatHistory = (data) => {
    socket.emit("direct-chat-history", data)
}