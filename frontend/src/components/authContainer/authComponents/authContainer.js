import React from 'react'
import './authContainer.css'
const authContainer = (props) => {
  return (
    <div className='authContainer'>
        <div className="BoxContainer">
            {props.children}    
        </div>
    </div>
  )
}

export default authContainer