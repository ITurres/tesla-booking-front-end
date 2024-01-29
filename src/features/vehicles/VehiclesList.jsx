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

  const { loading, error, vehicles } = useSelector((state) => state.vehicles);

  if (loading) {
    return (
      <div className="loading-error-wrapper">
        <Spinner animation="grow" variant="danger" />
        <h3>Loading...</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-error-wrapper">
        <h3>Sorry, something went wrong...</h3>
        <button type="button" className="" onClick={reFetchVehicles}>
          Refresh
        </button>
      </div>
    );
  }

  return vehicles.length > 0 ? (
    <div className="vehicles__list--wrapper">
      <SplideCarousel vehicles={vehicles} />
    </div>
  ) : (
    <div className="loading-error-wrapper">
      <h3>No vehicles found</h3>
      <button type="button" className="" onClick={reFetchVehicles}>
        Refresh
      </button>
    </div>
  );
};

export default VehiclesList;
