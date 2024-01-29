import { createSlice } from '@reduxjs/toolkit';

import createAsyncReducer from '../../helpers/createAsyncThunk';
import { fetchVehicles } from './vehiclesThunk';

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    createAsyncReducer(fetchVehicles, 'vehicles')(builder);
  },
});

export default vehiclesSlice.reducer;
