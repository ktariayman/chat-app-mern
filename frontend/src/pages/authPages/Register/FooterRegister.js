import React from 'react';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const getFormValidateMsg = () => {
  return 'Press to Register ';
};

const getFormNotValidateMsj = () => {
  return 'Please enter a valid email address , username that contains [3-12] caracters and password should have [8-14] caracters';
};
const FooterRegister = (props) => {
  const { handleRegister, isFormValid } = props;
  let navigate = useNavigate();
  const handleRedirectToLoginPage = () => {
    navigate('/login');
    console.log('login page ');
  };

  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidateMsj() : getFormValidateMsg()}>
        <div>
          <CustomPrimaryButton
            label='Register'
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        text=''
        redirectText='Already have an account ?'
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handleRedirectToLoginPage}
      />
    </>
  );
};

export default FooterRegister;
