import React from 'react'
import Input from '../../../components/input/Input'

const FormRegister = (props) => {
    const {email, setEmail ,password, setPassword , username, setUsername} = props
  return (
    <>
      <Input 
            value ={username}
            setValue ={setUsername}
            label='username' 
            type='text' 
            placeholder='username here please '
        />
        <Input 
            value ={email}
            setValue ={setEmail}
            label='email' 
            type='text' 
            placeholder='Email adress please '
        iconClass='uil uil-envelope' 

        />
      
        <Input 
            value ={password}
            setValue ={setPassword}
            label='password' 
            type='password' 
            placeholder='password here please '
            iconClass='uil uil-lock' 

        />

    </>
    )
}

export default FormRegister