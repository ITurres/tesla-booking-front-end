/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';

import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';

import PropTypes from 'prop-types';

const VehicleItem = ({ vehicleData }) => (
  <Link
    to={`/vehicles/${vehicleData.id}`}
    className="splide__slide splide__slide--vehicle-link"
    key={vehicleData.id}
  >
    <div className="splide__slide__container">
      <img
        className="splide__slide__img"
        src={vehicleData.image}
        alt="tesla model"
        width="100%"
      />
      <div className="splide__slide__overlay">
        <h2 className={`${vehicleData.model_name}`}>
          {vehicleData.model_name}
        </h2>
        <p>{`${vehicleData.description.substring(0, 100)}...`}</p>
      </div>
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
  </Link>
);

VehicleItem.propTypes = {
  vehicleData: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    model_name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

VehicleItem.defaultProps = {};

export default VehicleItem;
