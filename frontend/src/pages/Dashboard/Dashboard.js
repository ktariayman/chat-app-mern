import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/system';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { logout } from '../../helper/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authAction';
import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
});

const Dashboard = ({ setUser }) => {
  const renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      const user = localStorage.getItem('user');
      if (!user) {
        logout();
      } else {
        setUser(JSON.parse(user));
        connectWithSocketServer(JSON.parse(user));
      }
    }
    renderAfterCalled.current = true;
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
