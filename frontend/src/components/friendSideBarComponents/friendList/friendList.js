import React from 'react'
import './friendList.css'
import FriendListItem from './FriendListItem/FriendListItem'

const friendListData = [
  {
    id: 1,
    username: 'Joe',
    isOnline: true
  },
  {
    id: 2,
    username: 'Joe',
    isOnline: false
  },
  {
    id: 3,
    username: 'Joe',
    isOnline: true
  }
]
console.log(friendListData)
const friendList = () => {
  return (
    <div className="friendList">
    
      {
        friendListData.map((f) => (
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

export default friendList