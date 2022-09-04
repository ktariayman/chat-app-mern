import React ,{useEffect, useState} from 'react';
import './AddFriendDialog.css'
import { Dialog } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";
import Button from '../../buttons/button'
import {ValidEmail} from '../../../helper/ValidateForm'
import Input from '../../input/Input'
const additionalStyles = {
  width : "90%",
  height : "40px",
  margin : "5px",
  display : "flex",
  backgroundColor : "#3ba55d",
  cursor:"pointer",
}
const labelStyle = {
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}


const AddFriendDialog = (props) =>{
  const [email , setEmail ] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const handleOpenDialog = () => setShowDialog(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const handleCloseDialog = () => {
    setShowDialog(false);
    setEmail("");
  }
  const handleSendInvitation = () =>{
    //send friend request to server
    console.log('send invitation')
  }
  const sendButtonStyle = {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "40px",
    margin:'auto',
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor : isFormValid ? "#3ba55d" : "",
    color : !isFormValid ? "#000" : ""
  
  }

  useEffect(() => {
    setIsFormValid(ValidEmail(email));
  }, [email , setIsFormValid]);
  return (
    <div style={{width: '100%'}}>
       <Button  
                label="Add friend" 
                additionalStyles={additionalStyles}
                labelStyle ={labelStyle}
                onClick={handleOpenDialog}
                />
      <Dialog isOpen={showDialog} onDismiss={handleCloseDialog} className="close" aria-label="Add friend">
        <div className='close-container'>
        <button className="close-button" onClick={handleCloseDialog}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>

        </div>
        <div>
          <h3 style={{textAlign: 'center'}}>Add e-mail adress of friend you like to invite</h3>
          <Input 
           value ={email}
           setValue ={setEmail}
           label='Email' 
           type='text' 
           placeholder='email here please '
           aria-label="Announcement"
          />
          <Button  
                disabled={!isFormValid} 
                onClick={handleSendInvitation}
                label={isFormValid ? "Send" : ""} 
                additionalStyles={sendButtonStyle}
          />        
        </div>
      </Dialog>
    </div>
  );
}

export default AddFriendDialog
