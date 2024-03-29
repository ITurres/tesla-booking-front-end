import { HashRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Layout from '../components/Layout';
import VehiclesPage from '../pages/VehiclesPage';
import ReservationPage from '../pages/ReservationPage';
import AddVehiclePage from '../pages/AddVehiclePage';
import VehicleDetail from '../features/vehicles/VehicleDetail';
import ReservationList from '../features/reservations/ReservationsList';
import PageNotFound from '../components/PageNotFound';
import DeleteVehicleList from '../features/vehicles/DeleteVehicleList';

function App() {
  const userLogged = useSelector((state) => state.users.logged);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VehiclesPage />} />
          <Route path="/vehicles/:vehicleId" element={<VehicleDetail />} />
          {userLogged && (
            <>
              <Route path="/reservations" element={<ReservationList />} />
              <Route path="/reservations/new" element={<ReservationPage />} />
              <Route path="/vehicles/new" element={<AddVehiclePage />} />
              <Route path="/vehicles/delete" element={<DeleteVehicleList />} />
            </>
          )}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
