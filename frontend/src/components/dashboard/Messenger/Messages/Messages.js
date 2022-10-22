import React ,{useRef , useEffect}from 'react'
import MessagesHeader from './MessageHeader'
import {connect} from 'react-redux'
import './Messages.css'
import DUMMY_MESSAGES from './DUMMY_MESSAGES'
import SingleMessage from './SingleMessage'
const Messages = ({chosenChatDetails , messages}) => {
  return (
    <div className='messages__mainContainer'>
        <MessagesHeader name={chosenChatDetails?.name}/>
        {DUMMY_MESSAGES.map((message , index ) => {
          return <SingleMessage 
                key={message._id}
                content={message.content}
                username={message.author.username}     
                sameAuthor={message.sameAuthor}      
                date={message.date}
                sameDay={message.sameDay}
                /> 
        
        })}
        
    </div>
  )
}
const MapStoreStateToProps = ( {chat}) => {
    return {
        ...chat
    }
}
export default connect(MapStoreStateToProps)(Messages)