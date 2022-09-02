import React from 'react'
import Button from '../../../components/buttons/button'
const FooterLogin = (props) => {
    const { handleLogin , isFormValid } = props 
  return (
    <div>
        <Button  
            label="Login" 
            onClick={handleLogin} 
            disabled={!isFormValid} 
            additionalStyles={{marginTop:'10px'}}
            >

        </Button>
    </div>
  )
}

export default FooterLogin