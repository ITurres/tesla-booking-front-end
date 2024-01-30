import { createSlice } from '@reduxjs/toolkit';

import createAsyncReducer from '../../helpers/createAsyncThunk';
import { fetchVehicles, postNewVehicle } from './vehiclesThunk';

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    loading: false,
    error: null,
  },
  reducers: {
    addNewVehicle(state, { payload }) {
      return { ...state, vehicles: [...state.vehicles, payload] };
    },
  },
  extraReducers(builder) {
    createAsyncReducer(fetchVehicles, 'vehicles')(builder);
    createAsyncReducer(postNewVehicle, 'vehicles')(builder);
  },
});

export const { addNewVehicle } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
