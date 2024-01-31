/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { selectVehicle } from './vehiclesSlice';

const VehicleItem = ({ vehicleData }) => {
  const dispatch = useDispatch();
  return (
    <div className="splide__slide__container">
      <Link
        onClick={() => { dispatch(selectVehicle(vehicleData)); }}
        to={`/vehicles/${vehicleData.id}`}
        className="splide__slide splide__slide--vehicle-link"
        key={vehicleData.id}
      >
        <img
          className="splide__slide__img"
          src={vehicleData.image}
          alt="tesla model"
          width="100%"
        />
        <div className="splide__slide__overlay">
          <h2 className={`${vehicleData.carModelName}`}>
            {vehicleData.carModelName}
          </h2>
          <p>{`${vehicleData.description.substring(0, 100)}...`}</p>
        </div>
      </Link>
      <nav className="splide__slide__social-media-links">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/TeslaMotorsCorp/"
              rel="noreferrer noopener"
              target="_blank "
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              id="twitter-link"
              href="https://twitter.com/Tesla"
              rel="noreferrer noopener"
              target="_blank "
            >
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/teslamotors/"
              rel="noreferrer noopener"
              target="_blank "
            >
              <CiInstagram />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

VehicleItem.propTypes = {
  vehicleData: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    carModelName: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

VehicleItem.defaultProps = {};

export default VehicleItem;
