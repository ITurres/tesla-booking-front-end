import { createSlice } from '@reduxjs/toolkit';

import createAsyncReducer from '../../helpers/createAsyncReducer';

import {
  fetchVehicles,
  fetchVehicleById,
  postNewVehicle,
  deleteVehicleById,
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
      // ? when user is in 'AddNewVehicle' page, the array is empty.
      // ? thats why we need to create a new array with the new vehicle
      // ? to be iterable in 'VehiclesList' component.
      state.vehicles = [payload];
    },
    selectVehicle: (state, { payload }) => {
      state.vehicle = payload;
    },
    deleteVehicle: (state, { payload }) => ({
      ...state,
      vehicles: state.vehicles.filter((item) => item.id !== payload),
    }),
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
