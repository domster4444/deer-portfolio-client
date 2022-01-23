/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

const Skills = () => {
  return (
    <>
      <DashboardDrawer />
      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Education</header>
          <BreadCrumb currentPath="Education" />
        </div>

        <h2>Skills</h2>
        <form className="skills" action="/action_page.php">
          <fieldset style={{ fontSize: '1.8rem' }}>
            <legend style={{ fontSize: '2rem' }}>Skills:</legend>
            <label htmlFor="skills__skill">
              <span>Skills</span>
              <input type="text" id="skills__skill" name="skill" />
            </label>
            <br />
            <label htmlFor="skills__rate">
              <span>Rate Your Skills</span>
              <input type="number" id="skills__rate" name="rate" />
            </label>
            <br />
            <br />
            <input type="submit" value="Add To List" />
          </fieldset>
        </form>
        <UnstyledButtonsSimple name="Previous" path="/work" />
        <UnstyledButtonsSimple name="Next" path="/projects" />
      </section>
    </>
  );
};

export default Skills;
