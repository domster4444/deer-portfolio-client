import { configureStore } from '@reduxjs/toolkit';

import registerReducer from 'library/common/components/stateSlices/registerSlice';
import loginReducer from 'library/common/components/stateSlices/loginSlice';
import passwordResetEmailReducer from 'library/common/components/stateSlices/passwordResetEmailSlice';
import passwordResetPasswordReducer from 'library/common/components/stateSlices/passwordResetPasswordSlice';
import authOStateReducer from 'features/AuthOLoggedInUser/AuthOStateSlice';
import allUserStateReducer from 'features/AllUserDataSlice/AllUserDataSlice';

const loggedInUserFromStorage = localStorage.getItem('loggedInUser')
  ? JSON.parse(localStorage.getItem('loggedInUser'))
  : null;
const preloadedState = {
  login: {
    loggedInUser: loggedInUserFromStorage,
  },
};

export default configureStore({
  reducer: {
    allUserDataState: allUserStateReducer,
    authOState: authOStateReducer,
    register: registerReducer,
    login: loginReducer,
    passwordResetEmail: passwordResetEmailReducer,
    passwordResetPassword: passwordResetPasswordReducer,
  },
  preloadedState,
});
