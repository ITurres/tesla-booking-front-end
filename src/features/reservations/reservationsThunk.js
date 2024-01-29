import { createAsyncThunk } from '@reduxjs/toolkit';

import apiRequest from '../../helpers/apiRequest';

const postReservation = createAsyncThunk(
  'reservations/postReservation',
  async (reservationDataBody, { rejectWithValue }) => {
    const reservationsEndpoint = process.env.REACT_APP_TESLA_API_RESERVATIONS_CREATE;

    try {
      // ? The 'data' has already been validated parsed into JSON.
      const response = await apiRequest(
        reservationsEndpoint,
        'POST',
        reservationDataBody,
      );

      if (!response.ok) {
        return rejectWithValue(new Error('Something went wrong...'));
      }

      return response.json();
    } catch (error) {
      // ? rejectWithValue to dispatch a rejected action with a payload.
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

export default postReservation;
