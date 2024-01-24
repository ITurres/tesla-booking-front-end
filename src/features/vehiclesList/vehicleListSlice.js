import { createSlice } from '@reduxjs/toolkit';

import fetchVehicles from './vehicleListThunk';

const vehiclesListSlice = createSlice({
  name: 'vehiclesList',
  initialState: {
    vehicles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default vehiclesListSlice.reducer;
