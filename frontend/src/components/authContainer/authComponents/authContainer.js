import React from 'react'
import './authContainer.css'
const authContainer = (props) => {
  return (
    <div className='authContainer'>
    {/* background-color: #5865F2; */}
      
        <div className="BoxContainer">
            {props.children}    
        </div>
    </div>
  )
}

export default authContainer