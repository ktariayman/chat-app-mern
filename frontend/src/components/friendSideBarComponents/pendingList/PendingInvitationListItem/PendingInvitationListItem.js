import React, { useState } from 'react'
import './pendingInvitationListItem.css'
import Avatar from '../../../Avatar/avatar'
import InvitationDecisionButtons from '../InvitationDecisionButtons/InvitationDecisionButtons'
const PendingInvitationListItem = (props) => {
    const {
      username , id , email, 
       acceptFriendInvitation = () => {

       },
       rejectFriendInvitation = () => {

       },
    } = props
    const [buttonDisabled , setButtonDisabled] = useState(false);
    const handleAcceptFriendInvitation = () => {
      acceptFriendInvitation({id})
      setButtonDisabled(true) 
      console.log('acceptFriendInvitation' , id , buttonDisabled)

    }
    const handleRejectFriendInvitation = () => {
      rejectFriendInvitation({id})
      setButtonDisabled(true) 
      console.log('rejectFriendInvitation' , id , buttonDisabled)
    }
  return (
    <div className='pending-list-item-container'>
        <button className="button">

            <Avatar username={username}/>
            <div className="tooltip">
              <h3 className='username'>{username}</h3>
              <span className="tooltiptext">{email}</span>
            </div>

            <div>

            </div>
            {/* <OnlineIndicator isOnline={isOnline}/> */}

            <InvitationDecisionButtons 
              disabled={buttonDisabled}
              additionalStyles={buttonDisabled ? {backgroundColor : '#333' }: {}}
              acceptInvitationHandler={handleAcceptFriendInvitation} 
              rejectInvitationHandler={handleRejectFriendInvitation} 
              
            />

        </button>
        
    </div>
  )
}

export default PendingInvitationListItem