import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import AuthBox from '../../../components/AuthBox';
import FooterRegister from './FooterRegister';
import FormRegister from './FormRegister';
import { ValidateRegisterForm } from '../../../helper/ValidateForm';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/authAction';
const Register = ({ register }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useNavigate();
  const headerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '18px',
    fontWeight: 'bold'
  };
  const hrStyle = {
    width: '40%',
    position: 'absolute',
    height: '3px',
    bottom: '4px',
    background: '#333'
  };

  const handleRegister = () => {
    const user = {
      email,
      username,
      password
    };
    register(user, history);
  };
  useEffect(() => {
    if (email && password && username) {
      setIsFormValid(ValidateRegisterForm({ email, username, password }));
    }
  }, [email, password, username, setIsFormValid]);
  return (
    <AuthBox>
      <Typography variant='h5' sx={{ color: 'white ' }}>
        Create an account
      </Typography>

      <div style={headerStyles}>
        <div style={{ position: 'relative' }}>
          <h1>Register</h1>
          <hr style={hrStyle} />
        </div>
      </div>
      <FormRegister
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
      />
      <FooterRegister isFormValid={isFormValid} handleRegister={handleRegister} />
    </AuthBox>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  };
};

export default connect(null, mapActionToProps)(Register);
