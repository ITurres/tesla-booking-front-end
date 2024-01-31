import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FaXmark } from 'react-icons/fa6';

import { deactivateRegistrationPanel } from '../features/users/usersSlice';

import LoginForm from '../features/users/LoginForm';
import SignUpForm from '../features/users/SignUpForm';

import '../styles/components/RegistrationPanel.scss';

const RegistrationPanel = () => {
  const dispatch = useDispatch();

  const { registrationType } = useSelector(
    (state) => state.users.registrationPanel,
  );

  const closeRegistrationPanel = () => {
    const panel = document.querySelector('.registration-panel');

    panel.classList.toggle('hide');

    setTimeout(() => {
      dispatch(deactivateRegistrationPanel());
    }, 500);
  };

  return (
    <div className="registration-panel">
      <button
        type="button"
        className="x-button"
        aria-label="Close"
        onClick={closeRegistrationPanel}
      >
        <FaXmark />
      </button>
      {registrationType === 'login' ? <LoginForm /> : <SignUpForm />}
    </div>
  );
};

export default RegistrationPanel;
