import React, { useState } from 'react'
import './pendingInvitationListItem.css'
import Avatar from '../../../Avatar/avatar'
import InvitationDecisionButtons from '../InvitationDecisionButtons/InvitationDecisionButtons'
import {connect} from 'react-redux'
import {getActions} from '../../../../store/actions/friendActions'
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
      console.log(id)
      acceptFriendInvitation({id})
      setButtonDisabled(true) 
      console.log('acceptFriendInvitation' , id , buttonDisabled)

    }
    const handleRejectFriendInvitation = () => {
      console.log(id)
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

const mapActionToProps = (dispatch) =>
  {
    return {
      ...getActions(dispatch)
    }

  }


export default connect(null,mapActionToProps)(PendingInvitationListItem)