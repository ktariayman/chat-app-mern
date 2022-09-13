import React from 'react'
const headerStyles = {
  display:"flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: '18px',
  fontWeight: 'bold',
}
const hrStyle ={
    "width": "40%",
    "position": "absolute",
    "height": "3px",
    "bottom": "4px",
    "background": "#333"
}
const HeaderLogin = () => {
  return (
    <div style={headerStyles}>
      <div style={{position: 'relative'}}>
      <h1 >Login</h1>
      <hr style={hrStyle}/>
      </div>
      <h3>Ha, te revoilà !</h3>
      <div>Nous sommes si heureux de te revoir !</div>
    </div>
  )
}

export default HeaderLogin