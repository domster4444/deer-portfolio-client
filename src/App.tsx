/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-wrap-multilines */

// lib
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { setAuthOLoggedInState } from 'features/AuthOLoggedInUser/AuthOStateSlice';
import { setAllUserData } from 'features/AllUserDataSlice/AllUserDataSlice';

import constant from 'constant';

// pages
import Home from 'modules/Home/Home';

// commons
import Navigation from 'library/common/components/Toolbar/Navigation';
import LanguageSwitcher from 'library/common/components/LanguageSwitcher';
import Login from 'modules/Login/Login';
import Register from 'modules/Register/Register';
import Policy from 'modules/Policy/Policy';
import Welcome from 'modules/Welcome/Welcome';
import PasswordResetFormEmail from 'modules/PasswordResetFormEmail/PasswordResetFormEmail';
import PasswordResetFormPassword from 'modules/PasswordResetFormPassword/PasswordResetFormPassword';
import Footer from 'library/common/components/Footer/Footer';
import Profile from 'modules/Welcome/Pages/Profile/Profile';
import Payment from 'modules/Welcome/Pages/Payment/Payment';
import Themes from 'modules/Welcome/Pages/Themes/Themes';

// themes
import FirstTheme from 'themes/1FirstTheme/FirstTheme';
import VideoGuidance from 'modules/Welcome/Pages/VideoGuidance/VideoGuidance';
import ChatBox from 'library/common/components/ChatBox/ChatBox';
import PageNotFound from 'modules/PageNotFound/PageNotFound';

const App = () => {
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state: RootStateOrAny) => state.login);

  // ! auth O User_________________________________________________
  const authOUser = useSelector(
    (state: RootStateOrAny) => state.authOState.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserFunc = () => {
      fetch(`${constant.serverURL}/auth/login/success`, {
        method: 'GET',
        credentials: 'include',
        // @ts-ignore
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(
              '%clogin %csuccess %cfrom %cauthO',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;'
            );
            return res.json();
          }
          throw new Error('authentication has been failed!!');
        })
        .then((returnedResJsonObj) => {
          dispatch(setAuthOLoggedInState(returnedResJsonObj.user));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserFunc();
  }, []);

  // ! REDIRECT TO WELCOME PAGE ON LOGGED IN either by "authO" or "Local  Login"
  useEffect(() => {
    if (loggedInUser !== null) {
      console.log(
        '%c🅿️LoggedIn %cUser %cData',
        'color: pink',
        'color: pink',
        'color: pink'
      );
      console.log(loggedInUser);
      console.warn(
        '🌂__SAVED TO LOCAL STORAGE THAT USER IS LOGGED IN FROM APP.tsx__'
      );
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

      // ?? IF LOGGED IN FROM LOCAL LOGIN , Then on successful login, i mean
      // ?? when loggedInUser data is not null, then after that, fetcha all data of user and
      // ?? store it in redux toolkit STATE named as "ALLUSERDATA"
      const userEmail = loggedInUser.email;
      console.log(userEmail);
      fetch(`${constant.serverURL}/api/users/accountdata`, {
        method: 'POST',
        body: JSON.stringify({
          email: userEmail,
        }),
        credentials: 'include',
        // @ts-ignore
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(
              '%fetched %cmore %cdata %cfrom %cserver %cof %cuser %cafter %clogin %cfrom %cLocal %cLogin',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;',
              'color:white;font-weight:bold;'
            );
            return res.json();
          }
          throw new Error('failed To fetch user data');
        })
        .then((returnedResJsonObj) => {
          console.log(
            'FROM APP.tsx, 🆚all user data after login from local login is:- ',
            returnedResJsonObj
          );
          dispatch(setAllUserData(returnedResJsonObj));
        })
        .catch((err) => {
          console.log(err);
        });

      // ?? then navigate to "/welcome"
      navigate('/welcome');
    } else if (authOUser !== null) {
      console.log(
        '%c🅿️AuthO %cUser %cData ',
        'color: pink',
        'color: pink',
        'color: pink'
      );
      console.log(authOUser);
      navigate('/welcome');
    }
  }, [loggedInUser, authOUser]);

  return (
    <>
      <LanguageSwitcher />
      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            loggedInUser !== null || authOUser !== null ? <Welcome /> : <Home />
          }
        />
        <Route
          path="/login"
          element={
            loggedInUser !== null || authOUser !== null ? (
              <Welcome />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/register"
          element={
            loggedInUser !== null || authOUser !== null ? (
              <Welcome />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/policy"
          element={
            loggedInUser !== null || authOUser !== null ? (
              <Welcome />
            ) : (
              <Policy />
            )
          }
        />
        <Route
          path="/welcome"
          element={
            loggedInUser === null && authOUser === null ? (
              <Login />
            ) : (
              <Welcome />
            )
          }
        />
        <Route
          path="/profile"
          element={
            loggedInUser === null && authOUser === null ? (
              <Login />
            ) : (
              <Profile />
            )
          }
        />
        <Route
          path="/payment"
          element={
            loggedInUser === null && authOUser === null ? (
              <Login />
            ) : (
              <Payment />
            )
          }
        />
        <Route
          path="/themes"
          element={
            loggedInUser === null && authOUser === null ? <Login /> : <Themes />
          }
        />
        <Route
          path="/videoguidance"
          element={
            loggedInUser === null && authOUser === null ? (
              <Login />
            ) : (
              <VideoGuidance />
            )
          }
        />
        <Route
          path="/passwordresetformemail"
          element={
            loggedInUser !== null || authOUser !== null ? (
              <Welcome />
            ) : (
              <PasswordResetFormEmail />
            )
          }
        />
        <Route
          path="/password/reset/:token"
          // @ts-ignore
          element={<PasswordResetFormPassword />}
        />
        <Route
          path="/first-theme"
          element={
            loggedInUser !== null || authOUser !== null ? (
              <FirstTheme />
            ) : (
              <Login />
            )
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <ChatBox />
    </>
  );
};

export default App;
