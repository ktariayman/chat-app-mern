import React from 'react'
import PendingInvitationListItem from './PendingInvitationListItem/PendingInvitationListItem'
import './pendingList.css'
import {connect} from 'react-redux'
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
const pendingList = ({pendingFriendsInvitation}) => {

  return (
    <div className="pendingList">

    {
        pendingFriendsInvitation.map((p) => (
          <PendingInvitationListItem
            key={p.id}
            id={p.id}
            username={p.senderId.username}
            email={p.senderId.email}
          />
        ))
    }
    </div>
  )
}


const mapStoreStateToProps = ({friends}) => {
  return {
    ...friends,
  }

}
export default connect(mapStoreStateToProps)(pendingList)