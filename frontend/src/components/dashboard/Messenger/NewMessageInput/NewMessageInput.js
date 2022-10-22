import React ,{useState} from 'react'
import './NewMessageInput.css'
import {connect} from 'react-redux'
import { sendDirectMessage } from '../../../../realtimeCommunication/socketConnection'
const NewMessageInput = ({chosenChatDetails}) => {
  const [message, setMessage] = useState('');

  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if(message.length >0) {
      sendDirectMessage({
        receiverUserId : chosenChatDetails.id,
        content:message
      })
      setMessage("");
    }

    }
  return (
    <div className='NewMessageInput__MainContainer'>
      <input 
        class="NewMessageInput__Input" 
        placeholder={`write message here to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown= {handleKeyPressed}
      /> 
    </div>
  )
  }
const MapStoreStateToProps = ({chat}) => {
  return {
    ...chat,
  }
}
export default connect(MapStoreStateToProps)(NewMessageInput)