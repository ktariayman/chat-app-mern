import React, { useState , useEffect} from 'react'
import AuthContainer from '../../../components/authContainer/authComponents/authContainer'
import FormLogin from './FormLogin'
import HeaderLogin from './HeaderLogin'
import FooterLogin from './FooterLogin'
import {ValidateLoginForm } from '../../../helper/ValidateForm'
import { useNavigate } from 'react-router-dom'
import {connect} from "react-redux"
import { getActions } from '../../../store/actions/authAction'


const Login = ({login}) => {
  const history = useNavigate();
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => { 
    if (email && password) {
      setIsFormValid(ValidateLoginForm({email,password}));
    }
    },[email,password,setIsFormValid])
    const handleLogin = () => {
      const user = {
        email,
        password
      };
  
      login(user, history);
    };
  return (
    <AuthContainer>
      
        <HeaderLogin />
        <FormLogin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        />
        <FooterLogin isFormValid={isFormValid} handleLogin={handleLogin}/>
    </AuthContainer>
  )
}

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionToProps)(Login)