import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaExclamation, FaSpinner } from 'react-icons/fa6';
import { fetchVehicleById } from './vehiclesThunk';
import { selectVehicle } from '../reservations/reservationsSlice';
import getRandomId from '../../helpers/getRandomId';
import setPageTitle from '../../helpers/setPageTitle';
import '../../styles/features/vehicles/VehicleDetail.scss';

const VehicleDetail = () => {
  const loader = useRef(null);
  const [refetch, setRefetch] = useState(false);
  const { vehicleId } = useParams();
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.users.logged);
  const loading = useSelector((state) => state.vehicles.loading);
  const error = useSelector((state) => state.vehicles.error);
  const vehicle = useSelector((state) => state.vehicles.vehicle) || null;

  const toggleLoader = (open) => {
    if (open && !loader.current.classList.contains('visible')) {
      loader.current.classList.add('visible');
      setTimeout(() => loader.current.classList.add('active'));
    } else {
      setTimeout(() => {
        loader.current.classList.remove('active');
        setTimeout(() => loader.current.classList.remove('visible'), 500);
      }, 100);
    }
  };

  useEffect(() => {
    if (refetch || vehicle === null) {
      const promise = dispatch(fetchVehicleById(vehicleId));
      return () => promise.abort();
    }
    if (vehicle !== null) {
      setPageTitle(vehicle.carModelName);
    }
    return undefined;
  }, [dispatch, refetch, vehicle, vehicleId]);

  useEffect(() => {
    if (loading) {
      toggleLoader(true);
    }
    toggleLoader(false);
  }, [loading]);

  return (
    <section className="page">
      <div className="loader visible active" ref={loader}><FaSpinner /></div>
      {error !== null ? (
        <div className="error">
          <FaExclamation />
          <h2>{error}</h2>
          <button type="button" className="btn" onClick={() => { setRefetch(true); }}>Reload</button>
        </div>
      ) : vehicle && (
        <div className="details">
          <div className="image">
            <img src={vehicle.image} alt={vehicle.carModelName} />
            <Link to="/">Back</Link>
          </div>
          <div className="text">
            <h2>{vehicle.carModelName}</h2>
            <ul>
              {vehicle.performanceDetails.map((item) => <li key={getRandomId()}>{item}</li>)}
            </ul>
            <p>{vehicle.description}</p>
            <span>
              $
              {vehicle.rentalPrice}
            </span>
            {logged ? (<Link to="/reservations/new" onClick={() => dispatch(selectVehicle(vehicle.id))}>Reserve</Link>) : (<Link to="/">Login</Link>)}
          </div>
        </div>
      )}
    </section>
  );
};

export default VehicleDetail;
