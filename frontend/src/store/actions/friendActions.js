import * as api from '../../api'


export const friendsAction = {
    SET_FRIENDS : 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS : 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS : 'FRIENDS.SET_ONLINE_USERS',
}

export const  getActions = (dispatch) =>{
    return {
        sendFriendInvitation : (data ) => dispatch(sendFriendInvitation(data )),
        acceptFriendInvitation: (data ) =>   dispatch(acceptFriendInvitation(data)),
        rejectFriendInvitation: (data ) =>   dispatch(rejectFriendInvitation(data)) 
        
    }
}

export const setPendingInvitations = (pendingFriendsInvitation) => {

    return {
        type : friendsAction.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitation ,      
    }
}
const sendFriendInvitation = (data) => {
    return async (dispatch ) => {
        const response = await api.sendFriendInvitation(data);
        if(!response.error) {
            return "invitation sent successfully"
        }else{
            return response.exception?.response?.data
        }
}}
const acceptFriendInvitation = (data) => { 

    return async (dispatch) => {
            const response = await api.acceptFriendInvitation(data);
            if(!response.error) {
                return "invitation accepted successfully"
            }else{
                return response.exception?.response?.data
            }
 }}
const rejectFriendInvitation = (data) => { 
    return async (dispatch) => {
        const response = await api.rejectFriendInvitation(data);
        if(!response.error) {
            return "invitation rejected "
        }else{
            return response.exception?.response?.data
        }
}}