import React from 'react'

const headerStyles = {
  color: 'white',
  display:"flex",
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  fontSize: '18px',
  fontWeight: 'bold',
}
const HeaderLogin = () => {
  return (
    <div style={headerStyles}>
      <h3>Ha, te revoilà !</h3>
      <div>Nous sommes si heureux de te revoir !</div>
    </div>
  )
}

export default HeaderLogin