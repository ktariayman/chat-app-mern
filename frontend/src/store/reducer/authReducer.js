const initState = {
    user : null
}

const reducer  = (state = initState , action) =>{
    switch(action.type){
        case 'KTARI':
            return {
                ...state,
            }
            default:
                return state
                }
}

export default reducer