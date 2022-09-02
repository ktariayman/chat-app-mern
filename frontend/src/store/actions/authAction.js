import * as api from '../../api'

export const AuthActions = {
    SET_USER : 'AUTH.SET_USER',
}

export const getAction = (dispatch) => {
    return {
        login : (user , history) => dispatch(login(user, history)),
        register : (user , history) => dispatch(register(user, history))
    }
}

const setUser = (user) => {
    return {
        type: AuthActions.SET_USER,
        user
    }
}

const login = (user, history) => {
    return async (dispatch) => {
            const response = await api.login(user)
            if (response.error) {
                // error
            }
            else {
                const {user} = response?.data
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(setUser(user))
                history.push('/dashboard')
}
    }
}

const register = (user, history) => {
    return async (dispatch) => {
            const response = await api.register(user)
            if (response.error) {
                //error 
            }
            else {
                const {user} = response?.data
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(setUser(user))
                history.push('/dashboard')
}
    }
}