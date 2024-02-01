import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  deactivateRegistrationPanel,
  setUserSessionToken,
  loginUser,
} from './usersSlice';

import { userLogIn } from './userThunk';

import '../../styles/features/users/RegistrationForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  // ? userEmail = Default input:email value is the user's email from the sign up form
  // ? after successful sign up.
  // * if the user straight up navigates to the login form, then placeholder will be shown instead.
  const userEmail = useSelector((state) => state.users.email?.email);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [invalidInputText, setInvalidInputText] = useState('');
  const [buttonText, setButtonText] = useState('');
  const [buttonSuccess, setButtonSuccess] = useState(false);

  const handleSubmit = () => {
    const userLoginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (userLoginData.email && userLoginData.password) {
      dispatch(userLogIn(userLoginData)).then((response) => {
        if (!response.payload || !response.payload.token) {
          setInvalidInputText('Login failed. Please try again.');
          return;
        }

        dispatch(setUserSessionToken(response.payload.token));
        dispatch(
          loginUser({
            userName: response.payload.userName,
            email: response.payload.email,
          }),
        );

        setButtonText('Login successful.');
        setButtonSuccess(true);

        setTimeout(() => {
          dispatch(deactivateRegistrationPanel());
        }, 2500);
      });
    } else {
      setButtonText('oh no!');
      setInvalidInputText('Please enter a valid email and password.');
    }
  };

  return (
    <form className="registration-form" autoComplete="off">
      <h3>
        Hello there, &nbsp;
        <span>welcome</span>
        &nbsp;back!
      </h3>
      <input
        type="email"
        ref={emailRef}
        placeholder="Email"
        defaultValue={userEmail}
        required
      />
      <input
        type="password"
        ref={passwordRef}
        placeholder="Password"
        required
      />
      <button
        type="button"
        className={`btn ${buttonText ? 'form__error' : ''} ${
          buttonSuccess ? 'form__success' : ''
        }`}
        onClick={handleSubmit}
      >
        {buttonText ? `${buttonText}` : 'Login'}
      </button>

      <span className="registration-error-text">{invalidInputText}</span>
    </form>
  );
};
export default LoginForm;
