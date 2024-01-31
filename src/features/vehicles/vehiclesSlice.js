import { createSlice } from '@reduxjs/toolkit';

import createAsyncReducer from '../../helpers/createAsyncThunk';
import { fetchVehicles, fetchVehicleById, postNewVehicle } from './vehiclesThunk';

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicle: null,
    vehicles: [],
    loading: false,
    error: null,
  },
  reducers: {
    addNewVehicle(state, { payload }) {
      return { ...state, vehicles: [...state.vehicles, payload] };
    },
    selectVehicle: (state, { payload }) => {
      state.vehicle = payload;
    },
  },
  extraReducers(builder) {
    createAsyncReducer(fetchVehicles, 'vehicles')(builder);
    createAsyncReducer(fetchVehicleById, 'vehicle')(builder);
    createAsyncReducer(postNewVehicle, 'vehicles')(builder);
  },
});

export const { addNewVehicle, selectVehicle } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
