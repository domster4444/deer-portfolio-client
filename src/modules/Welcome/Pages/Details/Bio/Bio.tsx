/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

const Bio = () => {
  return (
    <>
      <DashboardDrawer />
      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Bio</header>
          <BreadCrumb currentPath="Bio" />
        </div>

        <hr />
        <h2>Bio</h2>
        <form className="bio" action="/" method="post">
          <fieldset style={{ fontSize: '1.8rem' }}>
            <label htmlFor="bio__img">
              <span>Photo:</span>
              <br />
              <input name="bio__img" id="bio__img" type="file" />
            </label>
            <br />
            <label htmlFor="bio__info">
              <span>Bio:</span>
              <br />
              <textarea name="bio__info" id="bio__info" cols={30} rows={10} />
            </label>
            <br />
            <input type="submit" value="Update" />
          </fieldset>
        </form>
        <UnstyledButtonsSimple name="Next" path="/contacts" />
      </section>
    </>
  );
};

export default Bio;
