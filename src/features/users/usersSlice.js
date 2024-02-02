import { createSlice } from '@reduxjs/toolkit';

import createAsyncReducer from '../../helpers/createAsyncReducer';

import { userLogout, userSignUp, userLogIn } from './userThunk';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    logged: false,
    token: null,
    userName: null,
    email: null,
    loading: false,
    error: null,
    registrationPanel: {
      active: false,
      registrationType: null,
    },
  },
  reducers: {
    activateRegistrationPanel: (state, action) => {
      state.registrationPanel.active = true;
      state.registrationPanel.registrationType = action.payload;
    },
    deactivateRegistrationPanel: (state) => {
      state.registrationPanel.active = false;
      state.registrationPanel.registrationType = null;
    },
    setUserSessionToken: (state, action) => {
      state.token = action.payload;
      document.cookie = `tesla-booking-user-token=${action.payload}`;
    },
    setUserEmailForLoginAfterSignUp: (state, action) => {
      state.email = action.payload;
    },
    loginUser: (state, action) => {
      state.logged = true;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
    logoutUser: (state) => {
      state.logged = false;
      state.userName = null;
      state.email = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    createAsyncReducer(userLogout, 'users')(builder);
    createAsyncReducer(userSignUp, 'users')(builder);
    createAsyncReducer(userLogIn, 'users')(builder);
  },
});

export const {
  activateRegistrationPanel,
  deactivateRegistrationPanel,
  setUserSessionToken,
  setUserEmailForLoginAfterSignUp,
  loginUser,
  logoutUser,
} = usersSlice.actions;

export default usersSlice.reducer;
