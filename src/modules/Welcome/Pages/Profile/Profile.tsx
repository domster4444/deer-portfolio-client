/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

import './Profile.css';
// dummy image
// import dummyProfile from 'assets/dummy-profile.png';

// ?  components
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import Form from './components/Form/Form';
import Upload from './components/Upload/Upload';

const Profile = () => {
  const { allUserData } = useSelector(
    (state: RootStateOrAny) => state.allUserDataState
  );
  let firstName: string;
  let lastName: string;
  let email: string;
  let url: string;
  if (allUserData === null) {
    firstName = 'undefined';
    lastName = 'undefined';
    email = 'undefined';
    url = 'undefined';
  } else {
    const accountDatas = allUserData.allUserData;
    firstName = accountDatas.firstName;
    lastName = accountDatas.lastName;
    email = accountDatas.email;
    url = accountDatas.url;
  }
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
              <img
                src={
                  url !== ''
                    ? url
                    : 'https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?s=612x612'
                }
                alt=""
              />
              <Upload />
            </div>

            <Form
              firstName={firstName}
              lastName={lastName}
              email={email}
              url={url}
            />
          </section>
        </div>
      </section>
    </>
  );
};

export default Profile;
