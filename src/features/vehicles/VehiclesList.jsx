import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaSpinner } from 'react-icons/fa6';

import SplideCarousel from './SplideCarousel';
import { fetchVehicles } from './vehiclesThunk';

import DataStatusDialog from '../../components/DataStatusDialog';

function VehiclesList() {
  const dispatch = useDispatch();
  const { loading, error, vehiclesList } = useSelector(
    (state) => state.vehicles,
  );

  const [staticVehicleList, setStaticVehicleList] = useState([]);
  const [databaseOnDelay, setDatabaseOnDelay] = useState(false);

  const reFetchVehicles = useCallback(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  useEffect(() => {
    reFetchVehicles();
    // ! The inclusion of 'staticVehicleList' in the dependency array ensures that
    // ! the details page displays correctly when a vehicle is selected.
    // * This is because, when the 'staticVehicleList' is updated, it also resets
    // * the 'vehicle' state to null, allowing for the selection of a new vehicle.
    // ! This behavior is specific to the handling of static vehicle data,
    // * ensuring that the component re-renders with the appropriate data
    // * (dynamic or static) each time a vehicle is selected.
  }, [reFetchVehicles, staticVehicleList]);

  // * Where the database is currently hosted, it takes a few seconds to
  // * initialize and become active. This useEffect hook will check if the
  // * initial fetch for the vehicles list is still loading
  // * after X seconds, if so it will fetch the static vehicle list from
  // * the JSON file which then will be rendered at the 'if (databaseOnDelay) {}' block.
  // * for a better user experience.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (loading) {
        setDatabaseOnDelay(true);
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    if (databaseOnDelay) {
      import('../../json/vehicles.json')
        .then((module) => {
          setStaticVehicleList(module.data);
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('An error occurred while importing the module:', error);
        });
    }
  }, [databaseOnDelay]);

  if (loading && databaseOnDelay) {
    return (
      <>
        <div className="vehicles__list--wrapper">
          <SplideCarousel vehiclesList={staticVehicleList} />
        </div>

        <DataStatusDialog reFetchFunction={reFetchVehicles} />
      </>
    );
  }

  if (error) {
    const isCentered = true;
    return (
      <DataStatusDialog
        isCentered={isCentered}
        paragraph="An error occurred while getting the updated list of vehicles.
        We are sincerely sorry for the inconvenience."
        strongText="Please try again later."
        status="Error"
        reFetchFunction={reFetchVehicles}
      />
    );
  }

  if (!loading && vehiclesList.length > 0) {
    return (
      <div className="vehicles__list--wrapper">
        <SplideCarousel vehiclesList={vehiclesList} />
      </div>
    );
  }

  return (
    <div className="vehicles__list--wrapper">
      <div className="loader-indicator visible">
        <FaSpinner />
      </div>
    </div>
  );
}

export default VehiclesList;
