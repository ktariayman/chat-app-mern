import React from 'react'
import Button from '../../../components/buttons/button'
import Redirect from '../../../components/redirect/redirect'
import { useNavigate } from 'react-router-dom';
const FooterLogin = (props) => {

    const { handleLogin , isFormValid } = props 
    let navigate = useNavigate();
    const handleRedirectToRegisterPage = () => {
      navigate('/register')
      console.log('register page ');

      }

  return (
    <>
        <Button  
            label="Login" 
            onClick={handleLogin} 
            disabled={!isFormValid} 
            additionalStyles={{marginTop:'10px'}}
            />
          <Redirect 
            text='need an account ?'
            redirectText='create a new account'
            additionalStyles={{marginTop:'10px' , color: 'red'}}
            handleRedirect={handleRedirectToRegisterPage}
          />
    </>
  )
}

export default FooterLogin