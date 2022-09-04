import React from 'react'
import './sidebar.css'
import Button from '../../../components/buttons/button'
const imgStyle = {
  width : "100%",
  height : "36px",
  cursor:"pointer",
}
const additionalStyles = {
  margin: "5px",
    height: "36px",
}


const sidebar = () => {
  return (
    <div className='sidebar'>
    <Button  
            imgUrl="https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png"
            imgStyle={imgStyle}
            additionalStyles={additionalStyles}
            />

    </div>
  )
}

export default sidebar