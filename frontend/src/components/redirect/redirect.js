import React from 'react'

const redirect = (props) => {
    const {text,redirectText, additionalStyles , handleRedirect} = props
  return (
    <div className='redirect' style={additionalStyles ? additionalStyles : {}}>
        <h3 style={{color: 'black', fontSize:'20px', fontWeight:'bold'}}>
        {text}
        <span className='redirect-link' onClick={handleRedirect}
          style={{color: 'rgb(88, 101, 242)'}}       > 
            {redirectText}
        </span >
        </h3>
       
    </div>
  )
}

export default redirect