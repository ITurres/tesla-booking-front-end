import React, { useRef, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { addReservation } from './reservationsSlice';
import postReservation from './reservationsThunk';

import '../../styles/features/reservations/ReservationForm.scss';

// ! IMPORTANT: once the 'VehicleDetail (Show page)' feature is completed, <===== IMPORTANT.
// ! the comments in lines 83 and 84 should be addressed. <====================== IMPORTANT.

const locations = [
  { id: 1, name: 'Cordoba, Argentina' },
  { id: 2, name: 'Kabul, Afghanistan' },
  { id: 3, name: 'Addis Ababa, Ethiopia' },
  { id: 4, name: 'Hawassa, Ethiopia' },
  { id: 5, name: 'Cairo, Egypt' },
  { id: 6, name: 'Alexandria, Egypt' },
  { id: 7, name: 'Tangier, Morocco' },
  { id: 8, name: 'Karaj, Iran' },
];

const ReservationForm = () => {
  const dispatch = useDispatch();

  const [buttonText, setButtonText] = useState('');

  const dateRef = useRef(null);
  const locationRef = useRef(null);
  const vehicleRef = useRef(null);

  const vehicles = useSelector((state) => state.vehiclesList.vehicles);
  const userName = useSelector((state) => state.users.userName) || 'Guest';

  const validateFormData = (reservationData) => {
    // eslint-disable-next-line camelcase
    const { car_id, date, location } = reservationData;
    // eslint-disable-next-line camelcase
    const carId = car_id;

    if (!date || !date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      setButtonText('Please enter a valid date.');
      return false;
    }

    const validateLocation = locations.some(
      (loc) => loc.id === parseInt(location, 10),
    );

    if (!location || !validateLocation) {
      setButtonText('Please select a valid location.');
      return false;
    }

    const validatedVehicle = vehicles.some(
      (vehicle) => vehicle.id === parseInt(carId, 10),
    );

    if (!carId || !validatedVehicle) {
      setButtonText('Please select a valid vehicle.');
      return false;
    }

    setButtonText('');

    return true;
  };

  const handleSubmit = () => {
    const reservationData = {
      car_id: vehicleRef.current.value,
      date: dateRef.current.value,
      location: locationRef.current.value,
    };

    if (validateFormData(reservationData)) {
      // ? once the location has been validated by id, we can store the location name
      // ? by using the (id - 1) as the index of the locations array.
      reservationData.location = locations[reservationData.location - 1].name;

      dispatch(postReservation(reservationData))
        .then(() => {
          dispatch(addReservation(reservationData));

          dateRef.current.value = '';
          locationRef.current.value = '';
          vehicleRef.current.value = '';

          setButtonText('Yay!, your reservation has been submitted.');
        })
        .catch(() => {
          setButtonText('Oops!, something went wrong.');
        });
    }
  };

  return (
    <div className="reservation-form">
      <form className="reservation-form__form">
        <input type="text" value={userName} readOnly />

        <input type="date" ref={dateRef} required />

        <select name="location" id="location" ref={locationRef} required>
          {locations.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>

        <select name="vehicle" id="vehicle" ref={vehicleRef} required>
          {/* TODO: IF USER SELECTED A VEHICLE FROM THE SHOW PAGE, */}
          {/* ...THATS THE ONE THAT SHOULD BE SELECTED BY DEFAULT. */}
          {/* OTHERWISE, ALL THE VEHICLES SHOULD BE AVAILABLE. */}

          <option disabled>Select a vehicle</option>

          {vehicles.map((vehicle) => (
            <option key={vehicle.id} value={vehicle.id}>
              {vehicle.model_name}
            </option>
          ))}
        </select>

        <button
          type="button"
          className={`btn ${buttonText ? 'form__error' : ''}`}
          onClick={handleSubmit}
        >
          {buttonText ? `${buttonText}` : 'Book Now'}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
