import React, { useEffect } from 'react'
import DashboardContainer from '../../components/dashboard/dashboardContainer/dashboardContainer'
import Sidebar from '../../components/dashboard/sidebar/sidebar'
import FriendSideBar from '../../components/dashboard/friendSideBar/friendSideBar'
import AppBar from '../../components/dashboard/AppBar/AppBar'
import Messenger from '../../components/dashboard/Messenger/Messenger'
import { logout } from '../../helper/auth'
import {connect} from "react-redux"
import { getActions } from '../../store/actions/authAction'
const Dashboard = ({setUser})  => {


  useEffect(() => { 
      const user = localStorage.getItem('user');
      if (!user) {
        logout()
      }else {
        setUser(JSON.parse(user))
      }
    },[])

  return (
      <DashboardContainer>
        <Sidebar/>
        <FriendSideBar />
        <Messenger />
        <AppBar />
      </DashboardContainer>
  )
}


const mapActionsToProps = (dispatch) => {
    return {
      ...getActions(dispatch)
      }
      }
export default connect(null,mapActionsToProps)(Dashboard)