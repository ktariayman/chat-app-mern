import React from 'react'
import './Input.css'
const Input = (props) => {
    const { value , setValue , label , type , placeholder } = props
    const handleChangeValue = (e) =>{
        setValue(e.target.value)
    }
    return (
    <div className='wrapper'>
        <p  
            className='label'>
            {label}
        </p>
        <input 
            className='input' 
            value={value}
            type={type}    
            placeholder={placeholder}
            onChange={handleChangeValue}

        />
    </div>
  )
}

export default Input