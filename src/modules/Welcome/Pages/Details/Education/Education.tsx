/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

const Education = () => {
  return (
    <>
      <DashboardDrawer />
      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Details</header>
          <BreadCrumb currentPath="Details" />
        </div>

        <h2>EDUCATION</h2>
        <form className="education" action="/action_page.php">
          <fieldset style={{ fontSize: '1.8rem' }}>
            <legend style={{ fontSize: '2rem' }}>
              Organization/Institution:
            </legend>
            <label htmlFor="education__organization">
              <span>Organization/Institution/College/School NAME</span>
              <input
                type="text"
                id="education__organization"
                name="organization"
              />
            </label>
            <br />
            <br />
            <label htmlFor="education__school--dateOfJoining">
              <span>Date of joining</span>
              <input
                style={{ width: '10rem' }}
                type="date"
                id="education__school--dateOfJoining"
                name="dateOfJoining"
              />
            </label>

            <label htmlFor="education__school--dateofLeaving">
              <span>Expected Date of joining/leaving</span>
              <input
                style={{ width: '10rem' }}
                type="date"
                id="education__school--dateofLeaving"
                name="dateofLeaving"
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Add To List" />
          </fieldset>
        </form>
        <UnstyledButtonsSimple name="Previous" path="/contacts" />
        <UnstyledButtonsSimple name="Next" path="/work" />
      </section>
    </>
  );
};

export default Education;
