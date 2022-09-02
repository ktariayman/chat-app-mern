import React, { useState } from 'react'
import AuthContainer from '../../../components/authContainer/authComponents/authContainer'
import FormLogin from './FormLogin'
import HeaderLogin from './HeaderLogin'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <AuthContainer>
        <HeaderLogin />
        <FormLogin
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        />
    </AuthContainer>
  )
}

export default Login