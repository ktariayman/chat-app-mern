import React from 'react'
import './InvitationDecisionButtons.css'
const InvitationDecisionButtons = (props) => {

  const {disabled , acceptInvitationHandler , rejectInvitationHandler , additionalStyles} = props
  return (
    <div className='InvitationDecisionButtons'>

        <div className='circle'>
            <a  disabled={disabled} onClick={acceptInvitationHandler} style={additionalStyles}>V</a>

        </div>
        <div  className='circle'>
            <a disabled={disabled} onClick={rejectInvitationHandler} style={additionalStyles}>X</a>
        </div>
    </div>
  )
}

export default InvitationDecisionButtons