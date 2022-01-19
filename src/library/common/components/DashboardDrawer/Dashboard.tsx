/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'library/common/components/stateSlices/loginSlice';
import { setAuthOLogoutState } from 'features/AuthOLoggedInUser/AuthOStateSlice';
import constant from 'constant';

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutSubmitHandler = () => {
    window.open(`${constant.serverURL}/auth/logout`, '_self');
    dispatch(setAuthOLogoutState());
    // @ts-ignore: Unreachable code error
    dispatch(logout());
    localStorage.removeItem('loggedInUser');
    navigate('/');
  };
  useEffect(() => {
    function menuBtnChange() {
      //  @ts-ignore
      if (sidebar.classList.contains('open')) {
        //  @ts-ignore
        closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right'); // replacing the iocns class
      } else {
        //  @ts-ignore
        closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu'); // replacing the iocns class
      }
    }

    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('#btn');
    const searchBtn = document.querySelector('.bx-search');

    //  @ts-ignore
    closeBtn.addEventListener('click', () => {
      //  @ts-ignore
      sidebar.classList.toggle('open');
      menuBtnChange(); // calling the function(optional)
    });

    //  @ts-ignore
    searchBtn.addEventListener('click', () => {
      // Sidebar open when you click on the search iocn
      //  @ts-ignore
      sidebar.classList.toggle('open');
      menuBtnChange(); // calling the function(optional)
    });

    // following are the code to change sidebar button(optional)
  }, []);
  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus icon" />
        <div className="logo_name">DeerPortfolio</div>
        <i className="bx bx-menu" id="btn" />
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search" />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <Link to="/welcome">
            <i className="bx bx-grid-alt" />
            <span className="links_name">Dashboard</span>
          </Link>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <Link to="/profile">
            <i className="bx bx-user" />
            <span className="links_name">Profile</span>
          </Link>
          <span className="tooltip">Profile</span>
        </li>
        <li>
          <Link to="/themes">
            <i className="bx bx-folder" />
            <span className="links_name">Themes</span>
          </Link>
          <span className="tooltip">Themes</span>
        </li>
        <li>
          <Link to="https://google.com">
            <i className="bx bx-pie-chart-alt-2" />
            <span className="links_name">Analytics</span>
          </Link>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <Link to="/chat">
            <i className="bx bx-chat" />
            <span className="links_name">Chat Support</span>
          </Link>
          <span className="tooltip">Chat</span>
        </li>
        <li>
          <Link to="/payment">
            <i className="bx bx-cart-alt" />
            <span className="links_name">Payment</span>
          </Link>
          <span className="tooltip">Order</span>
        </li>
        <li>
          <Link to="https://google.com">
            <i className="bx bx-heart" />
            <span className="links_name">Saved</span>
          </Link>
          <span className="tooltip">Saved</span>
        </li>
        <li>
          <Link to="https://google.com">
            <i className="bx bx-cog" />
            <span className="links_name">Setting</span>
          </Link>
          <span className="tooltip">Setting</span>
        </li>
        <li className="profile">
          <button
            style={{
              right: '0',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              padding: '2rem',
              position: 'absolute',
            }}
            type="button"
            onClick={logoutSubmitHandler}
          >
            <i className="bx bx-log-out" id="log_out" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
