import { createAsyncThunk } from '@reduxjs/toolkit';

import apiRequest from '../../helpers/apiRequest';

const userLogout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    const usersEndpoint = process.env.REACT_APP_TESLA_API_USER_LOGOUT;

    try {
      // ? The 'data' has already been validated parsed into JSON.
      return await apiRequest(usersEndpoint, 'DELETE');
    } catch (error) {
      // ? rejectWithValue to dispatch a rejected action with a payload.
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

export default userLogout;
