import React from 'react'
import './avatar.css'


const avatar = (props) => {
    const {  username   } = props
  return (
    <div className='avatar-preview'>{username.substring(0, 2)}</div>    
  )
}

export default avatar