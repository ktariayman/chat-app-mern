import React from 'react'
import './dashboardContainer.css'
const dashboardContainer = (props) => {
  return (
    <div className='dashboardContainer'>
            {props.children}    
    </div>
  )
}

export default dashboardContainer