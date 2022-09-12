import React from 'react'
import Button from '../../../components/buttons/button'
import Redirect from '../../../components/redirect/redirect'
import Msj from '../../../components/info/info'
import { useNavigate } from 'react-router-dom';
const FooterLogin = (props) => {
  
    const { handleLogin , isFormValid } = props 
    let navigate = useNavigate();
    const handleRedirectToRegisterPage = () => {
      navigate('/register')
      console.log('register page ');

      }
    const getFormValidateMsg = () => {
      return 'Press to log in '
    } 
    
    const getFormNotValidateMsj = () => {
      return 'Please enter a valid email address and password should have [8-14] caracters'

    }
  return (
    <>      
        <Msj  
            additionalStyles={{ marginTop:'10px' , 
                                color:isFormValid ? "#fff" : "#fff" , 
                                backgroundColor:isFormValid ? "green" : "red"  }}
            title = {isFormValid ? getFormValidateMsg() : getFormNotValidateMsj()}
        />
        <div>
        <Button  
            label="Login" 
            labelStyle={{width:'100%' , textAlign: 'center' , fontSize:'20px' , color:'#fff', fontWeight:'bold'}}
            onClick={handleLogin} 
            disabled={!isFormValid} 
            additionalStyles={{marginTop:'10px' , width:'100%' , backgroundColor : isFormValid ? '#5865F2' : '#36393f' }}
            />
          <Redirect 
            text='need an account ?'
            redirectText='create a new account'
            additionalStyles={{marginTop:'10px' , color: 'red'}}
            handleRedirect={handleRedirectToRegisterPage}
          />
        </div>
    </>
  )
}

export default FooterLogin