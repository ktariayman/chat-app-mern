import React from 'react'
import './chosenOptionLabel.css'
import {connect} from 'react-redux'
const chosenOptionLabel = ({name}) => {
    console.log(name)
  return (
    <h2 class="chosenOptionLabel">
        {`${name ? `Chosen Conversation ${name}` : ""}`}

    </h2>
    )
}

const MapStoreStateToProps = (state) => {
    return {
        name: state.chat.chosenChatDetails?.name ,
    }
}
export default connect(MapStoreStateToProps)(chosenOptionLabel)