import * as api from "../../api"


export const authActions = {
    SET_USER: "AUTH.SET_USER",
  };
  

export const getActions = (dispatch) => {
    return {
        login : (user , history) => dispatch(login(user, history)),
        register : (user , history) => dispatch(register(user, history)),
    }
}

const setUser = (user) => {
    return {
        type: authActions.SET_USER,
        user
    }
}



const login = (user, history) => {
    return async (dispatch) => {
      const response = await api.login(user);
      console.log(response);
      if (response.error) {
        // dispatch(openAlertMessage(response?.exception?.response?.data));
      } else {
        const { user } = response?.data;
        localStorage.setItem("user", JSON.stringify(user));
  
        dispatch(setUser(user));
        history("/dashboard");
      }
    };
  };

const register = (user, history) => {
    return async (dispatch) => {
            const response = await api.register(user)
            console.log(response)

            if (response.error) {
                //error 
            }
            else {
                const {user} = response?.data
                localStorage.setItem('user', JSON.stringify(user))
                dispatch(setUser(user))
                history('/dashboard')
}
    }
}