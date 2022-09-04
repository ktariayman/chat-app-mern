import React from 'react'
import './button.css'
const button = (props) => {

    const { label , additionalStyles , disabled , onClick ,imgUrl ,imgStyle , labelStyle} = props
  return (
    <button
        className='button'
        style={additionalStyles ? additionalStyles : {}}
        disabled={disabled}
        onClick={onClick}
    >
        
        {label &&
        <div style={labelStyle ? labelStyle : {}}>{label}</div> 
        }
        {imgUrl && 
          <img src={imgUrl} alt='imgUrl' style={imgStyle ? imgStyle : {}}/>
        }
    </button>
  )
}

export default button