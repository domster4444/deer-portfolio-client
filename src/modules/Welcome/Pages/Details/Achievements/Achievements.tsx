/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

const Achievements = () => {
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

        <h2>Achievements</h2>
        <form className="achievements" action="/action_page.php">
          <fieldset style={{ fontSize: '1.8rem' }}>
            <legend style={{ fontSize: '2rem' }}>Achievements:</legend>
            <label htmlFor="achievements__achievement">
              <span>Achievements</span>
              <input
                type="text"
                id="achievements__achievement"
                name="achievement"
              />
            </label>
            <br />
            <label htmlFor="achievements__achievementDescription">
              Achievement Description
              <br />
              <textarea
                id="achievements__achievementDescription"
                name="achievementDescription"
                cols={30}
                rows={10}
              />
            </label>
            <br />
            <label htmlFor="achievements__achievementImage">
              Achievement Image
              <input type="file" name="achievementImage" />
            </label>
            <br />
            <input type="submit" value="Add" />
          </fieldset>
        </form>
        <UnstyledButtonsSimple name="Previous" path="/projects" />
        <UnstyledButtonsSimple name="Successfully Completed" path="null" />
      </section>
    </>
  );
};

export default Achievements;
