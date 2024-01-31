import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/users/usersSlice';
import vehiclesReducer from '../features/vehicles/vehiclesSlice';
import reservationsReducer from '../features/reservations/reservationsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    vehicles: vehiclesReducer,
    reservations: reservationsReducer,
  },
});
