import * as api from '../../api'


export const friendsAction = {
    SET_FRIENDS : 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS : 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS : 'FRIENDS.SET_ONLINE_USERS',
}

export const  getActions = (dispatch) =>{
    return {
        sendFriendInvitation : (data ) => {
            dispatch(sendFriendInvitation(data ))
        }
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
        }
}}