import React from 'react';

import VehiclesList from '../features/vehicles/VehiclesList';

import '../styles/pages/VehiclesPage.scss';

const VehiclesPage = () => (
  <section className="vehicles__section">
    <div className="vehicles__section__overlay">
      <h1 className="vehicles__section__title">latest models</h1>
      <p>Please select a Tesla Model</p>
    </div>

    <VehiclesList />
  </section>
);

export default VehiclesPage;
