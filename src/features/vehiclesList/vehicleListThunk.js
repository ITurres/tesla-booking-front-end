import { createAsyncThunk } from '@reduxjs/toolkit';

import apiRequest from '../../helpers/apiRequest';

const fetchVehicles = createAsyncThunk(
  'vehiclesList/fetchVehicles',
  async () => {
    const vehiclesEndpoint = process.env.REACT_APP_TESLA_API_VEHICLES;

    const vehicles = await apiRequest(vehiclesEndpoint);
    return vehicles;
  },
);

export default fetchVehicles;
