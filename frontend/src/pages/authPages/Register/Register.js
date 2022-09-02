import React, { useState , useEffect} from 'react'
import AuthContainer from '../../../components/authContainer/authComponents/authContainer'
import FooterRegister from './FooterRegister';
import FormRegister from './FormRegister';
import {ValidateRegisterForm } from '../../../helper/ValidateForm'
import { useNavigate } from 'react-router-dom'
import {connect} from "react-redux"
import { getActions } from '../../../store/actions/authAction'
const Register = ({register}) => {
  const [email, setEmail] = useState(''); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useNavigate()
  const handleRegister = () => {
      const user = {
      email , 
      username , 
      password
      }
      register(user,history)
  }
      useEffect(() => { 
    if (email && password && username) {
      setIsFormValid(ValidateRegisterForm({email,username , password}));
    }
    },[email,password,username,setIsFormValid])
  return (
    <AuthContainer>
        <h2 style={{color:'#fff'}}>Register : Create an account</h2>
        <FormRegister 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            
            username={username}
            setUsername={setUsername}
        />
        <FooterRegister isFormValid={isFormValid} handleRegister={handleRegister}/>

    </AuthContainer>
  )
}


const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  }
}

export default connect(null, mapActionToProps)(Register)