import React from 'react'
import Avatar from '../../../Avatar/avatar'
import './SingleMessage.css'
const SingleMessage = (props) => {
  const {content,username,sameAuthor,date,sameDay} = props
    if(sameAuthor  && sameDay) {
        return (
            <div className='SingleMessage__SameAuthorMessageContent'>
                <div className='SingleMessage__SameAuthorMessageText'>
                    {content}
                </div>
            </div>
        )
    }
    return (
    <div className='SingleMessage__Maincontainer'>
        <div className='SingleMessage__AvatarContainer'>
            <Avatar username={username}/>
        </div>
        <div className='SingleMessage__MessageContainer'>
                <h2 style={{fontSize:"16px",color:"white"}}>
                    {username} {' '}
                    <span  style={{fontSize:"12px",color:"#72767d"}}>
                        {date}
                    </span>
                </h2>
                <div className='SingleMessage__MessageContent'>
                    {content}
                </div>
        </div>
      

    </div>
  )
}

export default SingleMessage