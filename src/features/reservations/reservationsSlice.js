import { createSlice } from '@reduxjs/toolkit';

import { postReservation, fetchReservations } from './reservationsThunk';

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
      // ? when user is in 'ReservationForm' page, and clicks 'My Reservations'
      // ? the API will return a single object, not an array.
      // ? thats why we need to create a new array with the new reservation
      // ? to be iterable in 'ReservationsList' component.
      state.reservations = [payload];
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
        // ? When is fulfilled, we are getting a single object, not an array.
        // ? thats why we need to create a new array with the new reservation.
        state.reservations = [action.payload];
      })
      .addCase(postReservation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addReservation, selectVehicle } = reservationSlice.actions;

export default reservationSlice.reducer;
