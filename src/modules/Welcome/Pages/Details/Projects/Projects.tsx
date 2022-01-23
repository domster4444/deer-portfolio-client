/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import DashboardDrawer from 'library/common/components/DashboardDrawer/DashboardDrawer';

// ?  components
import BreadCrumb from 'library/common/components/BreadCrumb/BreadCrumb';
import AccountMenu from 'library/common/components/AccountMenu/AccountMenu';
import UnstyledButtonsSimple from 'library/common/components/Buttons/UnstyledButtonsSimple/UnstyledButtonsSimple';

const Projects = () => {
  return (
    <>
      <DashboardDrawer />
      <section className="home-section">
        <div>
          <AccountMenu />
          <header className="text">Education</header>
          <BreadCrumb currentPath="Education" />
        </div>

        <h2>Projects</h2>
        <form className="projects" action="/action_page.php">
          <fieldset style={{ fontSize: '1.8rem' }}>
            <legend style={{ fontSize: '2rem' }}>Projects:</legend>
            <label htmlFor="projects__project">
              <span>Projects</span>
              <input type="text" id="projects__project" name="project" />
            </label>
            <br />
            <label htmlFor="projects__projectDescription">
              Project Description
              <br />
              <textarea
                id="projects__projectDescription"
                name="projectDescription"
                cols={30}
                rows={10}
              />
            </label>
            <br />
            <label htmlFor="projects__projectImage">
              Project Image
              <input type="file" name="projectImage" />
            </label>
            <br />
            <label htmlFor="projects__projectVideoLink">
              Project Video Link
              <input type="text" name="projectVideoLink" />
            </label>
            <br />
            <label htmlFor="projects__projectGithubLInk">
              Project Github Link
              <input type="text" name="projectGithubLink" />
            </label>
            <br />
            <label htmlFor="project__websiteLink">
              Project Website Link
              <input type="text" name="projectWebsiteLink" />
            </label>
            <br />
            <label htmlFor="projects__projectDocLink">
              Project Docs Link
              <input type="text" name="projectDocLink" />
            </label>
            <br />
            <br />
            <input type="submit" value="Add To List" />
          </fieldset>
        </form>
        <UnstyledButtonsSimple name="Previous" path="/skills" />
        <UnstyledButtonsSimple name="Next" path="/achievements" />
      </section>
    </>
  );
};

export default Projects;
