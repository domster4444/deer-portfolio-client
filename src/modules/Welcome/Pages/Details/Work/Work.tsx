/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

const Work = () => {
  return (
    <>
      <DashboardDrawer />
      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Education</header>
          <BreadCrumb currentPath="Education" />
        </div>

        <h2>WORK EXPERIENCE</h2>
        <form className="work-experience" action="/action_page.php">
          <fieldset style={{ fontSize: '1.8rem' }}>
            <legend style={{ fontSize: '2rem' }}>WORK EXPERIENCE:</legend>
            <label htmlFor="work-experience__company">
              <span>Company Name</span>
              <input type="text" id="work-experience__company" name="company" />
            </label>
            <br />
            <br />
            <label htmlFor="work-experience__company--dateOfJoining">
              <span>Date of joining</span>
              <input
                style={{ width: '10rem' }}
                type="date"
                id="work-experience__company--dateOfJoining"
                name="dateOfJoining"
              />
            </label>
            <input type="submit" />
          </fieldset>
        </form>
        <UnstyledButtonsSimple name="Previous" path="/education" />
        <UnstyledButtonsSimple name="Next" path="/skills" />
      </section>
    </>
  );
};

export default Work;
