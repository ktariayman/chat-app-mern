import React from 'react';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';

import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const getFormValidateMsg = () => {
  return 'Press to log in ';
};

const getFormNotValidateMsj = () => {
  return 'Please enter a valid email address and password should have [8-14] caracters';
};

const FooterLogin = (props) => {
  const { handleLogin, isFormValid } = props;
  let navigate = useNavigate();
  const handleRedirectToRegisterPage = () => {
    navigate('/register');
    console.log('register page ');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidateMsj() : getFormValidateMsg()}>
        <div>
          <CustomPrimaryButton
            label='Log in'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text='Need an account? '
        redirectText='Create an account'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handleRedirectToRegisterPage}
      />
    </>
  );
};

export default FooterLogin;
