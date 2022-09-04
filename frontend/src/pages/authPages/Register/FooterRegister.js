import React from 'react'
import Button from '../../../components/buttons/button'
import Redirect from '../../../components/redirect/redirect'
import Msj from '../../../components/info/info'
import { useNavigate } from 'react-router-dom';

const FooterRegister = (props) => {
    const { handleRegister , isFormValid } = props 
    let navigate = useNavigate();
    const handleRedirectToLoginPage = () => {
      navigate('/login')
      console.log('login page ');

      }
    const getFormValidateMsg = () => {
      return 'Press to Register '
    } 
    
    const getFormNotValidateMsj = () => {
      return 'Please enter a valid email address , username that contains [3-12] caracters and password should have [8-14] caracters'

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
                    label="Register" 
                    onClick={handleRegister} 
                    disabled={!isFormValid} 
                    additionalStyles={{marginTop:'10px' , width : '100%' ,backgroundColor : isFormValid ? '#5865F2' : '#36393f'}}
                    />
                <Redirect 
                    text='have an account ?'
                    redirectText='login with your account'
                    additionalStyles={{marginTop:'10px' , color: '#f3f3f3'}}
                    handleRedirect={handleRedirectToLoginPage}
                />
            </div>
        </>
    )
}

export default FooterRegister