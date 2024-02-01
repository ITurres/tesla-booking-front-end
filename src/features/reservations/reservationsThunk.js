import { createAsyncThunk } from '@reduxjs/toolkit';

import apiRequest from '../../helpers/apiRequest';

const postReservation = createAsyncThunk(
  'reservations/postReservation',
  async (reservationDataBody, { rejectWithValue }) => {
    const reservationsEndpoint = process.env.REACT_APP_TESLA_API_RESERVATIONS_CREATE;

    try {
      // ? The 'data' has already been validated parsed into JSON.
      return await apiRequest(
        reservationsEndpoint,
        'POST',
        reservationDataBody,
      );
    } catch (error) {
      // ? rejectWithValue to dispatch a rejected action with a payload.
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (reservationDataBody, { rejectWithValue }) => {
    const reservationsEndpoint = process.env.REACT_APP_TESLA_API_RESERVATIONS;

    try {
      // ? The 'data' has already been validated parsed into JSON.
      return await apiRequest(reservationsEndpoint);
    } catch (error) {
      // ? rejectWithValue to dispatch a rejected action with a payload.
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

export { postReservation, fetchReservations };
