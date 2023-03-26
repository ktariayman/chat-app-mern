import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import { ValidEmail } from '../../../helper/ValidateForm';
import InputWithLabel from '../../../components/InputWithLabel';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/friendActions';
import { sendFriendInvitation } from '../../../api';

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler }) => {
  const [email, setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    sendFriendInvitation(
      {
        email: email
      },
      handleCloseDialog()
    );
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setEmail('');
  };

  useEffect(() => {
    setIsFormValid(ValidEmail(email));
  }, [email, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter e-mail address of friend which you would like to invite</Typography>
          </DialogContentText>
          <InputWithLabel
            label='Mail'
            type='text'
            value={email}
            setValue={setEmail}
            placeholder='Enter mail address'
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label='Send'
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px'
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (disatch) => {
  return {
    ...getActions
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
