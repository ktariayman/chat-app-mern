import React from 'react'
import PendingInvitationListItem from './PendingInvitationListItem/PendingInvitationListItem'
import './pendingList.css'
const PendingListData = [
  {
    id: 1,
    senderId : {
      username: 'Ayman',
      email: 'ayman@gmail.com',
    }
  },
  {
    id: 2,
    senderId : {
      username: 'Ayman',
      email: 'ayman@gmail.com',
    }
  },
  {
    id: 3,
    senderId : {
      username: 'Ayman',
      email: 'ayman@gmail.com',
    }
  }
]
const pendingList = () => {
  return (
    <div className="pendingList">

{
        PendingListData.map((p) => (
          <PendingInvitationListItem
            key={p.id}
            id={p.id}
            username={p.senderId.username}
            email={p.senderId.email}
          />
        ))}
    </div>
  )
}

export default pendingList