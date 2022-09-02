import React, { useState , useEffect} from 'react'
import AuthContainer from '../../../components/authContainer/authComponents/authContainer'
import FooterRegister from './FooterRegister';
import FormRegister from './FormRegister';
import {ValidateRegisterForm } from '../../../helper/ValidateForm'

const Register = () => {
  const [email, setEmail] = useState(''); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleRegister = () => {
    console.log({
      email , username , password
    } , 'register');
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

export default Register