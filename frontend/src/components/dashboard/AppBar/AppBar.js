import React from 'react'
import './AppBar.css'
import {logout} from '../../../helper/auth'
const AppBar = () => {
  return (
    <div className='AppBar'>
      <button onClick = {logout}> Logout</button>
    </div>
  )
}

export default AppBar