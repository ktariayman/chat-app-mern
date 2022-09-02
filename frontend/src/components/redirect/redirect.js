import React from 'react'

const redirect = (props) => {
    const {text,redirectText, additionalStyles , handleRedirect} = props
  return (
    <div className='redirect' style={additionalStyles ? additionalStyles : {}}>
        {text}
        <span className='redirect-link' onClick={handleRedirect}> 
            {redirectText}
        </span >
    </div>
  )
}

export default redirect