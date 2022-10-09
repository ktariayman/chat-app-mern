import React from 'react'
import './AppBar.css'
import {logout} from '../../../helper/auth'
import ChosenOptionLabel from '../chosenOptionLabel/chosenOptionLabel'
const AppBar = () => {
  return (
    <div className='AppBar'>
      <ChosenOptionLabel />
      <button onClick = {logout}> Logout</button>
    </div>
  )
}

export default AppBar