import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout';
import VehiclesPage from '../pages/VehiclesPage';
import ReservationPage from '../pages/ReservationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VehiclesPage />} />
          <Route path="reservations/new" element={<ReservationPage />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
