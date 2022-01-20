/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import Video from './components/Video';

const VideoGuidance = () => {
  return (
    <>
      <DashboardDrawer />

      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Guidance</header>
          <BreadCrumb currentPath="VideoGuidance" />
          <h2
            style={{
              width: '100vw',
              textAlign: 'center',
              padding: '0.2rem 0rem',
              fontSize: '2.2rem',
            }}
            className="
            regular"
          >
            <u> Intro Video</u>
          </h2>
          <Video />
        </div>
      </section>
    </>
  );
};

export default VideoGuidance;
