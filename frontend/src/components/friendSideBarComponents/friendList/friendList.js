import React from 'react'
import './friendList.css'
import FriendListItem from './FriendListItem/FriendListItem'
import {connect } from 'react-redux'


const checkOnlineUsers = (friends = [] , onlineUsers =[]) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find( (user) => user.userId === f.id)
    f.isOnline = isUserOnline ? true : false
  })
  return friends
}
const friendList = ({friends , onlineUsers}) => {
  console.log(friends)

  return (
    <div className="friendList">
    
      {checkOnlineUsers(friends , onlineUsers).map((f) => (
          <FriendListItem
            id={f.id}
            username={f.username}
            key={f.id}
            isOnline={f.isOnline}
          />
      ))}
    </div>
  )
}
  
const mapStoreStateToProps = ({friends}) => {
    return {
    ...friends,
      }
}

export default connect(mapStoreStateToProps)(friendList)