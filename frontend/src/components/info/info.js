import React from 'react'
import './info.css'

const info = (props) => {

    const {title , additionalStyles} = props
      return (
    <div className="title" style={additionalStyles ? additionalStyles : {} }>{title}</div>
  )
}

export default info