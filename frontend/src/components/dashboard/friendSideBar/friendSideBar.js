import React from 'react'
import './friendSideBar.css'
import FriendTitle from '../../friendSideBarComponents/friendTitle/friendTitle'
import FriendList from '../../friendSideBarComponents/friendList/friendList'
import PendingList from '../../friendSideBarComponents/pendingList/pendingList'
import AddFriendDialog from '../../friendSideBarComponents/AddFriendDialog/AddFriendDialog'

const friendSideBar = () => {
  const handleOpenAddFriendDialog = () => {
    console.log('handleOpenAddFriendDialog');
  }
  return (
    <div className='friendSideBar'>
    <AddFriendDialog />    
    <FriendTitle title='Private Messenges' />

    <FriendList />
    <FriendTitle title='Pending invitations list' />
    <PendingList />

    </div>
  )
}

export default friendSideBar