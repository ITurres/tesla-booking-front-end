import React from 'react';

import ReservationForm from '../features/reservations/ReservationForm';
import setPageTitle from '../helpers/setPageTitle';

import '../styles/pages/ReservationPage.scss';

const ReservationPage = () => {
  setPageTitle('Book a Ride');

  return (
    <section className="reservation-page">
      <div className="reservation-page__hero">
        <video
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA-v2.mp4"
          autoPlay
          muted
          loop
          className="reservation-page__demo-video"
        />
        <div className="reservation-page__hero-overlay" />
      </div>

      <div className="reservation-page__content">
        <h1 className="reservation-page__title">
          book a
          <span> t</span>
          esla ride
        </h1>
        <p className="reservation-page__text">
          There are 5 different Tesla models to choose from. Each model is
          designed to suit a different lifestyle. Find yours. Take yourself or
          your family on the trip of a lifetime in one of our Tesla vehicles.
          Find and book a ride in seconds.
        </p>
      </div>

      <ReservationForm />
    </section>
  );
};

export default ReservationPage;
