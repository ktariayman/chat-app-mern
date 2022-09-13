import { friendsAction } from "../actions/friendActions"

const initState= {
    friends : [],
    pendingFriendsInvitation : [],
    onlineUsers : [],    
}

const reducer = (state = initState , action) => {
    switch (action.type) {
        case friendsAction.SET_PENDING_FRIENDS_INVITATIONS:
            return {
                ...state,
                pendingFriendsInvitation : action.pendingFriendsInvitation
            }
            case friendsAction.SET_FRIENDS:
                return {
                    ...state,
                    friends : action.friends
                }
            case friendsAction.SET_ONLINE_USERS:
                    return {
                        ...state,
                        onlineUsers : action.onlineUsers
                    }
            default:
                return state;    
            }
        }       

export default reducer