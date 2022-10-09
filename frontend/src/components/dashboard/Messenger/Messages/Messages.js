import React ,{useRef , useEffect}from 'react'
import MessagesHeader from './MessageHeader'
import {connect} from 'react-redux'
import './Messages.css'
const Messages = ({chosenChatDetails , messages}) => {
  return (
    <div className='messages__mainContainer'>
        <MessagesHeader name={chosenChatDetails?.name}/>
    </div>
  )
}
const MapStoreStateToProps = ( {chat}) => {
    return {
        ...chat
    }
}
export default connect(MapStoreStateToProps)(Messages)