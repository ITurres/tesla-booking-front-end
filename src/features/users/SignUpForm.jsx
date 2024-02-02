import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import validateUserSignUpInput from './validateUserSignUpInput';

import {
  activateRegistrationPanel,
  deactivateRegistrationPanel,
  setUserSessionToken,
  setUserEmailForLoginAfterSignUp,
} from './usersSlice';

import { userSignUp } from './userThunk';

import '../../styles/features/users/RegistrationForm.scss';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [invalidInputText, setInvalidInputText] = useState('');
  const [buttonText, setButtonText] = useState(null);
  const [buttonSuccess, setButtonSuccess] = useState(false);

  const handleSubmit = () => {
    const userSignUpData = {
      user_name: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const validatedData = validateUserSignUpInput(userSignUpData);

    if (validatedData.valid) {
      dispatch(userSignUp(userSignUpData))
        .then((response) => {
          if (!response.payload) {
            // ! this throw will be caught by the .catch block below
            throw new Error(response.error.message || 'User sign up failed');
          }

          dispatch(setUserSessionToken(response.payload.token));
          dispatch(
            setUserEmailForLoginAfterSignUp({
              email: response.payload.email,
            }),
          );

          setTimeout(() => {
            dispatch(deactivateRegistrationPanel());
          }, 2500);

          setInvalidInputText(null);
          setButtonSuccess(true);
          setButtonText('Thank you!');

          // ? within the LoginForm component, it will auto fill the email field.
          setTimeout(() => {
            dispatch(activateRegistrationPanel('login'));
          }, 3000);
        })
        .catch((error) => {
          setInvalidInputText(error.message);
          setButtonText('Error');
        });
    } else {
      // ? when validatedData is false, the function validateUserSignUpInput returns a string
      // ? with the error message.
      setInvalidInputText(validatedData.errorMessage);
    }
  };

  return (
    <form className="registration-form sign-up-form" autoComplete="off">
      <h3>
        New here
        <span>?</span>
      </h3>

      <input type="text" ref={userNameRef} placeholder="Your name" required />
      <input type="email" ref={emailRef} placeholder="Email" required />
      <input
        type="password"
        ref={passwordRef}
        placeholder="Password"
        required
      />

      <button
        type="button"
        className={`btn ${invalidInputText ? 'form__error' : ''} ${
          buttonSuccess ? 'form__success' : ''
        }`}
        onClick={handleSubmit}
      >
        {buttonText || (invalidInputText ? 'Invalid input' : 'Sign Up')}
      </button>

      <span className="registration-error-text">{invalidInputText}</span>
    </form>
  );
};
export default SignUpForm;
