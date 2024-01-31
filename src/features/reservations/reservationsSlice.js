import { createSlice } from '@reduxjs/toolkit';

import postReservation from './reservationsThunk';

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    vehicle: null,
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {
    addReservation: (state, { payload }) => {
      state.reservations = payload;
    },
    selectVehicle: (state, { payload }) => {
      state.vehicle = payload;
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

export const { addReservation, selectVehicle } = reservationSlice.actions;

export default reservationSlice.reducer;
