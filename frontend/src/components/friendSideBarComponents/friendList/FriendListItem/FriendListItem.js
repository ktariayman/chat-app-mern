import React from 'react'
import './FriendListItem.css'
import OnlineIndicator from '../onlineIndicator/onlineIndicator'
import Avatar from '../../../Avatar/avatar'
const FriendListItem = (props) => {
    const {username , id , isOnline}= props
    console.log(username, id, isOnline)
  return (
    <div className='friend-list-item-container'>
        <button className="button">

            <Avatar username={username}/>
            <h3 className="username">{username}</h3>
            <OnlineIndicator isOnline={isOnline}/>
        </button>
    </div>
  )
}

export default FriendListItem