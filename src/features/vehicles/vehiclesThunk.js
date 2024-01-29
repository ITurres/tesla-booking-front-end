import { createAsyncThunk } from '@reduxjs/toolkit';

import apiRequest from '../../helpers/apiRequest';

const fetchVehicles = createAsyncThunk(
  'vehiclesList/fetchVehicles',
  async (_, { rejectWithValue }) => {
    const vehiclesEndpoint = process.env.REACT_APP_TESLA_API_VEHICLES;

    try {
      return await apiRequest(vehiclesEndpoint);
    } catch (error) {
      return rejectWithValue(error || 'Something went wrong...');
    }
  },
);

// ! The next eslint error will be disable, once the `postVehicle` thunk is implemented,
// ! and the thunk is exported alongside `fetchVehicles`, then we can remove the disable
// ! comment.
// eslint-disable-next-line import/prefer-default-export
export { fetchVehicles };
