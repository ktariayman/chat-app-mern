import React from 'react'
import Avatar from '../../../Avatar/avatar'
import './MessageHeader.css'
const MessageHeader = ({name}) => {
  return (
    <div className='MessageHeader__mainContainer'>
        <Avatar username={name}/>
        <h2 className='MessageHeader__name'>
            {name}
        </h2>
        <h3 className='MessageHeader__text'>
            This is the beginning of the conversation with <span style={{color:"#f9f9f9"}}>{name}</span>
        </h3>
    </div>
  )
}

export default MessageHeader