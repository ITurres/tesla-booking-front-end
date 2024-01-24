import React from 'react';

import VehiclesList from '../features/vehiclesList/VehiclesList';

import '../styles/pages/VehiclesPage.scss';

const VehiclesPage = () => (
  <main className="vehicles__main">
    <div className="vehicles__main__overlay">
      <h1 className="vehicles__main__title">latest models</h1>
      <p>Please select a Tesla Model</p>
    </div>

    <div className="vehicles__list--wrapper">
      <VehiclesList />
    </div>
  </main>
);

export default VehiclesPage;
