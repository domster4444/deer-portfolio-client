/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ? MUI
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import LinkI from '@mui/material/Link';
import BreadCrumbSkeleton from './BreadCrumbSkeleton';

import './BreadCrumb.css';

type PropTypes = {
  currentPath: string;
};
const BreadCrumb = ({ currentPath }: PropTypes) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {(() => {
        if (isLoaded === true) {
          return (
            <Breadcrumbs
              style={{ fontSize: '2rem', margin: '0.75rem 0rem' }}
              aria-label="breadcrumb"
            >
              <Link to="/welcome">
                <LinkI className="location" underline="hover" color="inherit">
                  HOME
                </LinkI>
              </Link>

              <Link to={`/${currentPath.toLowerCase()}`}>
                <LinkI
                  className="location"
                  underline="hover"
                  color="inherit"
                  href="/getting-started/installation/"
                >
                  {currentPath.toUpperCase()}
                </LinkI>
              </Link>

              <Typography style={{ fontSize: '2rem' }} color="text.primary">
                Breadcrumbs
              </Typography>
            </Breadcrumbs>
          );
        }
        return <BreadCrumbSkeleton />;
      })()}
    </>
  );
};

export default BreadCrumb;
