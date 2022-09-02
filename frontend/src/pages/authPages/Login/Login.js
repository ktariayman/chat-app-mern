import React, { useState , useEffect} from 'react'
import AuthContainer from '../../../components/authContainer/authComponents/authContainer'
import FormLogin from './FormLogin'
import HeaderLogin from './HeaderLogin'
import FooterLogin from './FooterLogin'
import {ValidateLoginForm } from '../../../helper/ValidateForm'
const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => { 
    if (email && password) {
      setIsFormValid(ValidateLoginForm({email,password}));
    }
    },[email,password,setIsFormValid])
  const handleLogin = () => {
    console.log('isFormValid', isFormValid);
    }
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

export default Login