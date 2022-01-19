/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';

const CustomerChat = () => {
  return (
    <>
      <DashboardDrawer />

      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">CustomerChat</header>
          <BreadCrumb currentPath="CustomerChat" />
        </div>
      </section>
    </>
  );
};

export default CustomerChat;
