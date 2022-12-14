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
        {
          isFormValid && 
          <Msj  
          additionalStyles={{ 
            margin:'10px 0px' , 
            color:isFormValid ? "#fff" : "#fff" , 
            backgroundColor:isFormValid ? "green" : "red"  , 
            width:'100%' ,
            textAlign: 'center' ,
            fontSize: '16px' ,
          }}
          title = {isFormValid ? getFormValidateMsg() : getFormNotValidateMsj()}
          />
        }     
   
        <div>
        <Button  
            label="Login" 
            labelStyle={{width:'100%' , textAlign: 'center' , fontSize:'20px' , color:'#fff', fontWeight:'bold'}}
            onClick={handleLogin} 
            disabled={!isFormValid} 
            additionalStyles={{marginTop:'10px' , width:'100%' , backgroundColor : isFormValid ? '#4070f4' : '#36393f' }}
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