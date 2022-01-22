/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'axios';
import constant from 'constant';

const initialState = {
  status: 'idle',
  loggedInUser: null,
  error: null,
};
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (loginFormData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${constant.serverURL}/api/users/login`,
        loginFormData
      );

      if (data) {
        toast.success('🦄 LoggedIn Successful', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.log('data', data);
      }
      return data;
    } catch (err) {
      toast.error('error occured while logging in', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log('err occured while loggin in is ==', err);
      return rejectWithValue(err.response.data);
    }
  }
);
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout(state, action) {
      state.loggedInUser = null;
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.loggedInUser = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload.message;
    },
  },
});
export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
