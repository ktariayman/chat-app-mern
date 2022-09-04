import React from 'react'
import './onlineIndicator.css'
const onlineIndicator = (props) => {
    const {isOnline} = props
  return (
    <>
        {isOnline &&
        <div className="online-indicator">
        </div>
            }
    </>

  )
}

export default onlineIndicator