import React from 'react'
import './friendTitle.css'
const friendTitle = (props) => {
  const {title} = props
  return (
    <div className='friendTitle'>{title}</div>
  )
}

export default friendTitle