import { AuthActions } from "../actions/authAction"
const initState = {
    user : null
}

const reducer  = (state = initState , action) =>{
    switch(action.type){
        case AuthActions.SET_USER:
            return {
                ...state,
                user : action.user,
            }
            default:
                return state
                }
}

export default reducer