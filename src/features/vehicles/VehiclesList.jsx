import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Spinner from 'react-bootstrap/Spinner';

import SplideCarousel from './SplideCarousel';
import { fetchVehicles } from './vehiclesThunk';

import '../../styles/features/vehicles/VehiclesList.scss';

const VehiclesList = () => {
  const dispatch = useDispatch();

  // ? useCallback to avoid creating a new function on every render
  // ? since useEffect uses the function as a dependency.
  const reFetchVehicles = useCallback(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    reFetchVehicles();
  }, [reFetchVehicles]);

  const { loading, error, vehiclesList } = useSelector(
    (state) => state.vehicles,
  );

  if (loading) {
    return (
      <div className="loading-error-wrapper">
        <Spinner animation="grow" variant="danger" />
        <p>
          The project database is currently hosted on Render.com and is in a
          dormant state. Kindly allow a few moments for the database to
          initialize and become active.
        </p>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-error-wrapper">
        <h3>Sorry, something went wrong...</h3>
        <button type="button" className="btn" onClick={reFetchVehicles}>
          Refresh
        </button>
      </div>
    );
  }

  return vehiclesList.length > 0 ? (
    <div className="vehicles__list--wrapper">
      <SplideCarousel vehiclesList={vehiclesList} />
    </div>
  ) : (
    <div className="loading-error-wrapper">
      <h3>No vehicles found</h3>
      <button type="button" className="btn" onClick={reFetchVehicles}>
        Refresh
      </button>
    </div>
  );
};

export default VehiclesList;
