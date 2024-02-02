import { createAsyncThunk } from '@reduxjs/toolkit';

import apiRequest from '../../helpers/apiRequest';

import deleteCookie from '../../helpers/deleteCookie';

const userSignUp = createAsyncThunk('users/signup', async (userData) => {
  const usersSignUpEndpoint = process.env.REACT_APP_TESLA_API_USER_SIGNUP;

  return apiRequest(usersSignUpEndpoint, 'POST', userData);
});

const userLogIn = createAsyncThunk('users/login', async (userData) => {
  const usersLoginEndpoint = process.env.REACT_APP_TESLA_API_USER_LOGIN;

  return apiRequest(usersLoginEndpoint, 'POST', userData);
});

const userLogout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    const usersLogoutEndpoint = process.env.REACT_APP_TESLA_API_USER_LOGOUT;

    try {
      const response = await apiRequest(usersLogoutEndpoint, 'DELETE');

      deleteCookie('tesla-booking-user-token');

      return response;
    } catch (error) {
      // ? rejectWithValue to dispatch a rejected action with a payload.
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

export { userSignUp, userLogIn, userLogout };
