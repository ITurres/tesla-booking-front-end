import { createSlice } from '@reduxjs/toolkit';

import createAsyncReducer from '../../helpers/createAsyncReducer';

import {
  fetchVehicles, fetchVehicleById, postNewVehicle, deleteVehicleById,
} from './vehiclesThunk';

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
    deleteVehicle: (state, { payload }) => (
      { ...state, vehicles: state.vehicles.filter((item) => item.id !== payload) }),
  },
  extraReducers(builder) {
    createAsyncReducer(fetchVehicles, 'vehicles')(builder);
    createAsyncReducer(fetchVehicleById, 'vehicle')(builder);
    createAsyncReducer(postNewVehicle, 'vehicles')(builder);
    createAsyncReducer(deleteVehicleById, 'vehicle')(builder);
  },
});

export const { addNewVehicle, selectVehicle, deleteVehicle } = vehiclesSlice.actions;

export default vehiclesSlice.reducer;
