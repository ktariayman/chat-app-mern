import React from 'react';
import InputWithLabel from '../../../components/InputWithLabel';

const FormRegister = (props) => {
  const { email, setEmail, password, setPassword, username, setUsername } = props;
  return (
    <>
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label='username'
        type='text'
        placeholder='username here please '
      />
      <InputWithLabel
        value={email}
        setValue={setEmail}
        label='email'
        type='text'
        placeholder='Email adress please '
        iconClass='uil uil-envelope'
      />

      <InputWithLabel
        value={password}
        setValue={setPassword}
        label='password'
        type='password'
        placeholder='password here please '
        iconClass='uil uil-lock'
      />
    </>
  );
};

export default FormRegister;
