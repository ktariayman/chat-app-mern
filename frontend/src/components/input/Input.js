import React from 'react'
import './Input.css'
const Input = (props) => {
    const { value , setValue , label , type , placeholder , iconClass } = props
    const handleChangeValue = (e) =>{
        setValue(e.target.value)
        console.log(iconClass)
    }
    return (
    <div className='wrapper'>
        <p  
            className='label'>
            {label} 
        </p>
        <div className='input-wrapper'>
         
            <input 
                className='input' 
                value={value}
                type={type}    
                placeholder={placeholder}
                onChange={handleChangeValue}
            />
               {
            iconClass && 
            <i className={iconClass}></i>
            }
        </div>
    </div>
  )
}

export default Input