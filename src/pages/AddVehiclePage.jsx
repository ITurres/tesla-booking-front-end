import React from 'react';

import setPageTitle from '../helpers/setPageTitle';

import AddVehicleForm from '../features/vehicles/AddVehicleForm';

import '../styles/pages/AddVehiclePage.scss';

const AddVehiclePage = () => {
  setPageTitle('Add a new Vehicle');

  return (
    <section className="add-vehicle-page">
      <div className="add-vehicle-page__desktop-background" />
      <div className="add-vehicle-page__content">
        <h1>
          Go on and add a new
          <span> vehicle</span>
          .
        </h1>
        <p>
          Explore our diverse fleet, including Teslas and other exceptional
          vehicles. Contribute to our collection by adding a new vehicle through
          the form below. Provide all the necessary details to ensure accurate
          storage in our database.
        </p>

        <AddVehicleForm />
      </div>
    </section>
  );
};

export default AddVehiclePage;
