import { createAsyncThunk } from '@reduxjs/toolkit';

import apiRequest from '../../helpers/apiRequest';

const fetchVehicles = createAsyncThunk(
  'vehicles/fetchVehicles',
  async (_, { rejectWithValue }) => {
    const vehiclesEndpoint = process.env.REACT_APP_TESLA_API_VEHICLES;

    try {
      return await apiRequest(vehiclesEndpoint);
    } catch (error) {
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

const fetchVehicleById = createAsyncThunk(
  'vehicles/fetchVehicleById',
  async (vehicleId) => {
    const vehicleEndpoint = `${process.env.REACT_APP_TESLA_API_VEHICLES}/${vehicleId}`;

    const vehicle = await apiRequest(vehicleEndpoint);
    return vehicle;
  },
);

const postNewVehicle = createAsyncThunk(
  'vehicles/postNewVehicle',
  async (newVehicleDataBody, { rejectWithValue }) => {
    const vehiclesCreateEndpoint = process.env.REACT_APP_TESLA_API_VEHICLES_CREATE;

    try {
      return await apiRequest(vehiclesCreateEndpoint, 'POST', newVehicleDataBody);
    } catch (error) {
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

export { fetchVehicles, fetchVehicleById, postNewVehicle };
