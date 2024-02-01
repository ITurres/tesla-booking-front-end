import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaExclamation, FaSpinner } from 'react-icons/fa6';
import { fetchReservations } from './reservationsThunk';
import setPageTitle from '../../helpers/setPageTitle';
import ReservationItem from './ReservationItem';
import '../../styles/features/reservations/ReservationsList.scss';

const ReservationList = () => {
  const loader = useRef(null);
  const [refetch, setRefetch] = useState(true);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.reservations.error);
  const loading = useSelector((state) => state.reservations.loading);
  const reservations = useSelector((state) => state.reservations.reservations);

  const toggleLoader = (open) => {
    if (open && !loader.current.classList.contains('reservations_visible')) {
      loader.current.classList.add('reservations_visible');
      setTimeout(() => loader.current.classList.add('reservations_active'));
    } else {
      setTimeout(() => {
        loader.current.classList.remove('reservations_active');
        setTimeout(() => loader.current.classList.remove('reservations_visible'), 500);
      }, 100);
    }
  };

  setPageTitle('My Reservations');

  useEffect(() => {
    if (refetch) {
      const promise = dispatch(fetchReservations());
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, refetch]);

  useEffect(() => {
    if (loading) {
      toggleLoader(true);
    }
    toggleLoader(false);
  }, [loading]);

  return (
    <section className="reservations_page">
      <div className="reservations_loader reservations_visible reservations_active" ref={loader}><FaSpinner /></div>
      {(error !== null || reservations || reservations.length === 0) ? (
        <div className="reservations_error">
          <FaExclamation />
          <h2>{error !== null ? error : 'No Reservations available!'}</h2>
          {error !== null && <button type="button" className="btn" onClick={() => { setRefetch(true); }}>Reload</button>}
        </div>
      ) : (
        <>
          <h2>My Reservations</h2>
          <ul className="reservations_list">
            {reservations.map((item) => <ReservationItem key={item.id} item={item} />)}
          </ul>
        </>
      )}
    </section>
  );
};

export default ReservationList;
