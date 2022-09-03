import React from 'react'
import DashboardContainer from '../../components/dashboard/dashboardContainer/dashboardContainer'
import Sidebar from '../../components/dashboard/sidebar/sidebar'
import friendSideBar from '../../components/dashboard/friendSideBar/friendSideBar'
import AppBar from '../../components/dashboard/AppBar/AppBar'
import Messenger from '../../components/dashboard/Messenger/Messenger'
const Dashboard = () => {
  return (
      <DashboardContainer>
        <Sidebar/>
        <friendSideBar />
        <Messenger />
        <AppBar />
      </DashboardContainer>
  )
}

export default Dashboard