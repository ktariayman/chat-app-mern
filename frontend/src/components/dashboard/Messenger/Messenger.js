import React from 'react'
import './Messenger.css'
import {connect} from 'react-redux'
import WelcomeMessage from './WelcomeMessage'
import MessangerContent from './MessangerContent'
const Messenger = ({ chosenChatDetails}) => {
  return (
    <div className='Messenger'>

      {!chosenChatDetails ? (
        <WelcomeMessage/>
      ) :(
        <MessangerContent chosenChatDetails={chosenChatDetails}/>

      )
      }
    </div>
  )
}

const mapStoreStateToProps = ({chat}) => {
  return {
    ...chat
  }
}
export default connect(mapStoreStateToProps)(Messenger)