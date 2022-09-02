import React from 'react'
import './button.css'
const button = (props) => {

    const { label , additionalStyles , disabled , onClick } = props
  return (
    <button
        className='button'
        style={additionalStyles ? additionalStyles : {}}
        disabled={disabled}
        onClick={onClick}
    >
        {label}
    </button>
  )
}

export default button