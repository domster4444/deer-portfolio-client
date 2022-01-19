import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { loginUser } from 'library/common/components/stateSlices/loginSlice';

import styled from 'styled-components';
import GoogleBtn from 'assets/googleBtn.jpg';
import GithubBtn from 'assets/githubBtn.jpg';
import FacebookBtn from 'assets/facebookBtn.jpg';
import constant from 'constant';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const { status, loggedInUser, error } = useSelector(
    (state: RootStateOrAny) => state.login
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
    }),

    onSubmit: (values) => {
      // @ts-ignore: Unreachable code error
      dispatch(loginUser(values));
    },
  });

  // if (loggedInUser) {
  //   localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  //   navigate('/welcome');
  // }

  // ?? styled compponent
  const GoogleButton = styled.img`
    height: 3rem;
    width: 14rem;
    cursor: pointer;
    border: 1px solid black;
    transition: all ease-in-out 0.6s;
    &:active {
      transition: all ease-in-out 0.3s;
      transform: scale(0.8);
    }
  `;
  const GitHubButton = styled.img`
    height: 3rem;
    width: 14rem;
    cursor: pointer;
    border: 1px solid black;
    transition: all ease-in-out 0.6s;
    &:active {
      transition: all ease-in-out 0.3s;
      transform: scale(0.8);
    }
  `;
  const FacebookButton = styled.img`
    height: 3rem;
    width: 14rem;
    cursor: pointer;
    border: 1px solid black;
    transition: all ease-in-out 0.6s;
    &:active {
      transition: all ease-in-out 0.3s;
      transform: scale(0.8);
    }
  `;

  // TODO: authO
  const google = () => {
    window.open(`${constant.serverURL}/auth/google`, '_self');
  };
  const github = () => {
    window.open(`${constant.serverURL}/auth/github`, '_self');
  };
  const facebook = () => {
    window.open(`${constant.serverURL}/auth/facebook`, '_self');
  };

  const navigateToResetPasswordPage = () => {
    navigate('/passwordresetformemail');
  };
  return (
    <section id="register-form">
      <header>
        <h1>Login CHECK</h1>
      </header>

      <GoogleButton src={GoogleBtn} onClick={google} />
      <FacebookButton src={FacebookBtn} onClick={facebook} />
      <GitHubButton src={GithubBtn} onClick={github} />

      <form onSubmit={formik.handleSubmit}>
        EMAIL:
        <input type="email" id="email" {...formik.getFieldProps('email')} />
        {formik.errors.email && formik.touched.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}
        <br />
        PASSWORD:
        <input
          type="password"
          id="password"
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password ? (
          <p className="error">{formik.errors.password}</p>
        ) : null}
        <br />
        <button style={{ fontSize: '2rem' }} type="submit">
          Login
        </button>
        {status === 'loading' ? (
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        <br />
        <button
          type="button"
          style={{ fontSize: '2rem' }}
          onClick={navigateToResetPasswordPage}
        >
          Click me to reset password
        </button>
      </form>
    </section>
  );
};

export default Login;
