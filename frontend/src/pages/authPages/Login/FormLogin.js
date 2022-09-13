import React from 'react'
import Input from '../../../components/input/Input'

const FormLogin = (props) => {
    const {email , setEmail , password , setPassword } = props
  return (
    <div className='form'>
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
    </div>
    )
}

export default FormLogin