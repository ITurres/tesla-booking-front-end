import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import apiRequest from '../../helpers/apiRequest';

const usersEndpoint = process.env.REACT_APP_TESLA_API_USERS;

export const userLogout = createAsyncThunk('users/logout', async (_, { rejectWithValue }) => {
  try {
    // ? The 'data' has already been validated parsed into JSON.
    return await apiRequest(usersEndpoint, 'DELETE');
  } catch (error) {
    // ? rejectWithValue to dispatch a rejected action with a payload.
    return rejectWithValue(error || 'Something went wrong...');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    logged: false, token: null, user_name: null, loading: false, error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogout.fulfilled, (state) => {
      // ? calls helper to remove stored access token
      window.localStorage.removeItem('token');
      return {
        ...state, logged: false, token: null, user_name: null,
      };
    });
    builder.addMatcher(isAnyOf(userLogout.pending), (state) => ({ ...state, loading: true }));
    builder.addMatcher(isAnyOf(userLogout.rejected), (state, { error }) => (
      { ...state, loading: false, error }));
  },
});

export default usersSlice.reducer;
