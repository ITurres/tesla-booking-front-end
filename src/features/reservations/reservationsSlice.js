import { createSlice } from '@reduxjs/toolkit';

import postReservation from './reservationThunk';

const reservationSlice = createSlice({
  name: 'reservationsList',
  initialState: {
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {
    addReservation: (state, { payload }) => {
      state.reservations = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postReservation.pending, (state) => {
        state.loading = true;
      })
      .addCase(postReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(postReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
