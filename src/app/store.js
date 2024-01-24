import { configureStore } from '@reduxjs/toolkit';

import vehiclesListReducer from '../features/vehiclesList/vehicleListSlice';

export default configureStore({
  reducer: {
    vehiclesList: vehiclesListReducer,
  },
});
