/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import './Profile.css';

// dummy image
import dummyProfile from 'assets/dummy-profile.png';

// ?  components
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import Form from './components/Form/Form';
import Upload from './components/Upload/Upload';

const Profile = () => {
  return (
    <>
      <DashboardDrawer />

      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Profile</header>
          <BreadCrumb currentPath="profile" />
          <section className="profile">
            <header>
              <h5 className="light">Edit Profile</h5>
            </header>
            <div className="profile__imagecontainer">
              <img src={dummyProfile} alt="" />
              <Upload />
            </div>

            <Form />
          </section>
        </div>
      </section>
    </>
  );
};

export default Profile;
