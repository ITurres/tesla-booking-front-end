/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

import '../../../node_modules/@splidejs/react-splide/dist/css/themes/splide-default.min.css';

import '../../styles/features/vehiclesList/SplideCarousel.scss';

import { MdOutlinePlayArrow } from 'react-icons/md';

import VehicleItem from './VehicleItem';

const SplideCarousel = ({ vehicles }) => (
  <Splide
    className="splide__container"
    tag="section"
    aria-label="Vehicles carousel"
    hasTrack={false}
    options={{
      rewind: true,
      type: 'loop',
      perPage: 3,
      perMove: 1,
      width: '85%',
      height: '100%',
      gap: '0rem',
      cover: false,
      isNavigation: false,
      pagination: true,
      mediaQuery: 'max',
      arrows: 2,
      breakpoints: {
        800: {
          arrows: false,
          perPage: 1,
          width: '100%',
        },
        1048: {
          perPage: 2,
        },
      },
    }}
  >
    <SplideTrack>
      {vehicles.map((vehicleData) => (
        <SplideSlide key={vehicleData.id}>
          <VehicleItem vehicleData={vehicleData} />
        </SplideSlide>
      ))}
    </SplideTrack>

    <div className="splide__arrows">
      <button type="button" className="splide__arrow splide__arrow--prev">
        <span className="react-icon react-icon--prev">
          <MdOutlinePlayArrow />
        </span>
      </button>
      <button type="button" className="splide__arrow splide__arrow--next">
        <span className="react-icon react-icon--next">
          <MdOutlinePlayArrow />
        </span>
      </button>
    </div>
  </Splide>
);

SplideCarousel.propTypes = {
  vehicles: PropTypes.arrayOf(Object).isRequired,
};

SplideCarousel.defaultProps = {};

export default SplideCarousel;
