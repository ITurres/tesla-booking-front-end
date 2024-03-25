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

import deleteCookie from '../helpers/deleteCookie';
import getCookie from '../helpers/getCookie';

function getAndDeleteCookie() {
  const userTokenCookieName = 'tesla-booking-user-token';
  if (getCookie(userTokenCookieName)) {
    deleteCookie(userTokenCookieName);
  }
}

// * Check if the browser supports the PerformanceNavigationTiming API.
function isNavigationTimingSupported() {
  return 'performance' in window && 'getEntriesByType' in performance;
}

// ! When user reloads the page, the user is logged out and the token (cookie) is deleted.
// ! Ideally, the user should stay logged in when the page is reloaded.
// ! This is a momentary solution to delete the token when the page is reloaded, so when
// ! the main page vehicle list is loaded, does not contain the user's vehicles.
document.addEventListener('DOMContentLoaded', () => {
  if (isNavigationTimingSupported()) {
    if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
      getAndDeleteCookie();
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (performance.navigation.type === 1) {
      // * Fallback ^^^ for non-supporting browsers.
      // TODO:Note: 'navigation' is deprecated and will be removed in the future.
      getAndDeleteCookie();
    }
  }
});

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
