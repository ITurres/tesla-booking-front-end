import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaExclamation, FaSpinner } from 'react-icons/fa6';
import { deleteVehicleById, fetchVehicles } from './vehiclesThunk';
import DeleteVehicleItem from './DeleteVehicleItem';
import setPageTitle from '../../helpers/setPageTitle';
import '../../styles/features/vehicles/DeleteVehicleList.scss';
import { deleteVehicle } from './vehiclesSlice';

const DeleteVehicleList = () => {
  const loader = useRef(null);
  const dialog = useRef(null);
  const [confirm, setConfirm] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [refetch, setRefetch] = useState(true);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.vehicles.error);
  const loading = useSelector((state) => state.vehicles.loading);
  const vehicles = useSelector((state) => state.vehicles.vehicles).filter((vehicle) => (
    vehicle.ownedByUser));

  const toggleLoader = (open) => {
    if (open && !loader.current.classList.contains('delete_visible')) {
      loader.current.classList.add('delete_visible');
      setTimeout(() => loader.current.classList.add('delete_active'));
    } else {
      setTimeout(() => {
        loader.current.classList.remove('delete_active');
        setTimeout(() => loader.current.classList.remove('delete_visible'), 500);
      }, 100);
    }
  };

  const toggleDialog = (open) => {
    if (open && !dialog.current.classList.contains('delete_visible')) {
      dialog.current.classList.add('delete_visible');
      setTimeout(() => dialog.current.classList.add('delete_active'));
    } else {
      setTimeout(() => {
        dialog.current.classList.remove('delete_active');
        setTimeout(() => dialog.current.classList.remove('delete_visible'), 500);
      }, 100);
    }
  };

  const deleteHandler = (vehicelId) => {
    setSelectedId(vehicelId);
    toggleDialog(true);
  };

  setPageTitle('My Vehicles');

  useEffect(() => {
    if (refetch) {
      const promise = dispatch(fetchVehicles());
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, refetch]);

  useEffect(() => {
    if (loading) {
      toggleLoader(true);
    }
    setTimeout(() => toggleLoader(false), 500);
  }, [loading]);

  useEffect(() => {
    if (confirm) {
      toggleDialog(false);
      const promise = dispatch(deleteVehicleById(selectedId));
      promise.then(() => {
        setConfirm(false);
        setSelectedId(null);
        dispatch(deleteVehicle(selectedId));
      });
      return () => promise.abort();
    }
    return undefined;
  }, [dispatch, confirm, selectedId]);

  return (
    <section className="delete_page">
      <div className="delete_loader delete_visible delete_active" ref={loader}><FaSpinner /></div>
      <dialog className="delete_dialog" ref={dialog}>
        <div>
          <FaExclamation />
          <h3>Are you sure?</h3>
          <span>
            <button type="button" className="btn" onClick={() => setConfirm(true)}>Yes</button>
            <button type="button" className="btn" onClick={() => toggleDialog(false)}>No</button>
          </span>
        </div>
      </dialog>
      {(error !== null || vehicles.length === 0) ? (
        <div className="delete_error">
          <FaExclamation />
          <h2>{error !== null ? error : 'No Vehicles available!'}</h2>
          {error !== null && <button type="button" className="btn" onClick={() => { setRefetch(true); }}>Reload</button>}
        </div>
      ) : (
        <>
          <h2>My Vehicles</h2>
          <ul className="delete_list">
            {vehicles.map((item) => (
              <DeleteVehicleItem key={item.id} item={item} handler={deleteHandler} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default DeleteVehicleList;
