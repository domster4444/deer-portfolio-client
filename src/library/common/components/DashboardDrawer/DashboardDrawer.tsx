/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import './Drawer.css';

// ? router
import Dashboard from './Dashboard';

const DashboardDrawer = () => {
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);
  const authOUser = useSelector(
    (state: RootStateOrAny) => state.authOState.user
  );

  const HasLoggedIn = loggedInUser !== null || authOUser !== null;

  if (HasLoggedIn) {
    return <Dashboard />;
  }

  return <div style={{ display: 'none' }}>. </div>;
};

export default DashboardDrawer;
