import React from 'react'
import './FriendListItem.css'
import OnlineIndicator from '../onlineIndicator/onlineIndicator'
import Avatar from '../../../Avatar/avatar'
import {chatTypes, getActions} from '../../../../store/actions/chatAction'
import {connect } from 'react-redux'
const FriendListItem = (props) => {
    const {username , id , isOnline , setChosenChatDetails}= props
    console.log(username, id, isOnline )
    const handleChooseActiveConversation = () => {
      setChosenChatDetails({id:id , name:username} ,  chatTypes.DIRECT)
    }
  return (
    <div className='friend-list-item-container'>
        <button className="button"
          onClick={handleChooseActiveConversation}
        >

            <Avatar username={username}/>
            <h3 className="username">{username}</h3>
            <OnlineIndicator isOnline={isOnline}/>
        </button>
    </div>
  )
}

const mapActionToProps = (dispatch) =>{
  return {
    ...getActions(dispatch)
  }
}
export default connect(null,mapActionToProps)(FriendListItem)