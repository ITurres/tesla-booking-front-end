import { configureStore } from '@reduxjs/toolkit';

import usersReducer from '../features/users/usersSlice';
import vehiclesListReducer from '../features/vehiclesList/vehicleListSlice';
import reservationsReducer from '../features/reservations/reservationsSlice';

export default configureStore({
  reducer: {
    users: usersReducer,
    vehiclesList: vehiclesListReducer,
    reservationsList: reservationsReducer,
  },
});
