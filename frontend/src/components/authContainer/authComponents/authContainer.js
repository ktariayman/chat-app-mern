import React from 'react'
import './authContainer.css'
const authContainer = (props) => {
  return (
    <div className='authContainer'>
        <div class="BoxContainer">
            {props.children}    
        </div>
    </div>
  )
}

export default authContainer