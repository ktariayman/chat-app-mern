import React , {useEffect}from 'react'
import Messages from './Messages/Messages'
import NewMessageInput from './NewMessageInput/NewMessageInput'
import './MessangerContent.css'
import { getDirectChatHistory } from '../../../realtimeCommunication/socketConnection'
const MessangerContent = ({ chosenChatDetails}) => {
    useEffect(()=>{
      getDirectChatHistory({
          receiverUserId:  chosenChatDetails.id,
      })
    },[chosenChatDetails])
  return (
    <div className="MessangerContent__wrapper">
        <Messages />
        <NewMessageInput />
    </div>
  )
}

export default MessangerContent