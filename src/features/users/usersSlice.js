import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import userLogout from './userThunk';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    logged: false,
    token: null,
    userName: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(userLogout.fulfilled, (state) => {
      // ? calls helper to remove stored access token
      window.localStorage.removeItem('token');
      return {
        ...state,
        logged: false,
        token: null,
        user_name: null,
      };
    });
    builder.addMatcher(isAnyOf(userLogout.pending), (state) => ({
      ...state,
      loading: true,
    }));
    builder.addMatcher(isAnyOf(userLogout.rejected), (state, { error }) => ({
      ...state,
      loading: false,
      error,
    }));
  },
});

export default usersSlice.reducer;
