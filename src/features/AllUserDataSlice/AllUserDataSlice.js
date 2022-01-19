/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialAllUserData = {
  allUserData: null,
};

export const allUserStateSlice = createSlice({
  name: 'allUserDataName',
  // 👇 count:count

  initialState: initialAllUserData,
  reducers: {
    //! the ()=> takes "state" as parameter. the state has the initialState
    setAllUserData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.allUserData = action.payload;
    },
    //! the ()=> takes "state" as parameter. the state has the initialState
    resetAllUserData: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
// eslint-disable-next-line operator-linebreak
export const { setAllUserData, resetAllUserData } = allUserStateSlice.actions;

export default allUserStateSlice.reducer;
// ! we will import this default export as "counterReducer" instead of "counterSlice" or "counterSlice.reducer"
// ! since this is a default export so , you can import with any name not only "counterReducer" but with any name
