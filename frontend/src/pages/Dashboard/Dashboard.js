import React, { useEffect , useRef} from 'react'
import DashboardContainer from '../../components/dashboard/dashboardContainer/dashboardContainer'
import Sidebar from '../../components/dashboard/sidebar/sidebar'
import FriendSideBar from '../../components/dashboard/friendSideBar/friendSideBar'
import Messenger from '../../components/dashboard/Messenger/Messenger'
import AppBar from '../../components/dashboard/AppBar/AppBar'
import { logout } from '../../helper/auth'
import {connect} from "react-redux"
import { getActions } from '../../store/actions/authAction'

import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection'
const Dashboard = ({setUser})  => {

  const renderAfterCalled = useRef(false);

  useEffect(() => { 
    if (!renderAfterCalled.current){
      const user = localStorage.getItem('user');
      if (!user) {
        logout()
      }else {
        setUser(JSON.parse(user))    
        connectWithSocketServer(JSON.parse(user))                                
      }
    }
    renderAfterCalled.current = true;

    },[])

  return (
      <DashboardContainer>
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