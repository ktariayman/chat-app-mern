import React , {useEffect}from 'react'
import Messages from './Messages/Messages'
import NewMessageInput from './NewMessageInput/NewMessageInput'
import './MessangerContent.css'
const MessangerContent = ({ chosenChatDetails}) => {
    useEffect(()=>{

    },[])
  return (
    <div class="MessangerContent__wrapper">
        <Messages />
        <NewMessageInput />
    </div>
  )
}

export default MessangerContent