/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

const Contacts = () => {
  return (
    <>
      <DashboardDrawer />
      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Contacts</header>
          <BreadCrumb currentPath="Contacts" />
        </div>

        <h2>Contacts</h2>
        <form className="contact" action="/action_page.php">
          <fieldset style={{ fontSize: '1.8rem' }}>
            <legend style={{ fontSize: '2rem' }}>Contacts:</legend>

            <label htmlFor="twitterLink">
              <span>twitter: </span>
              <input type="text" id="twitterLink" name="twitterLink" />
            </label>

            <br />
            <br />
            <label htmlFor="facebookLink">
              <span>facebook</span>
              <input type="text" id="facebookLink" name="facebookLink" />
            </label>

            <br />
            <br />
            <label htmlFor="instagramLink">
              <span>instagram</span>
              <input type="text" id="instagramLink" name="instagramLink" />
            </label>

            <br />
            <br />
            <label htmlFor="linkedinLink">
              <span>linkedin</span>
              <input type="text" id="linkedinLink" name="linkedinLink" />
            </label>

            <br />
            <br />
            <label htmlFor="githubLink">
              <span>github</span>
              <input type="text" id="githubLink" name="githubLink" />
            </label>

            <br />
            <br />
            <label htmlFor="websiteLink">
              <span>website</span>
              <input type="text" id="websiteLink" name="websiteLink" />
            </label>

            <br />
            <br />
            <input type="submit" value="Update" />
          </fieldset>
        </form>
        <UnstyledButtonsSimple name="Previous" path="/bio" />
        <UnstyledButtonsSimple name="Next" path="/education" />
      </section>
    </>
  );
};

export default Contacts;
