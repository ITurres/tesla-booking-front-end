## Pull Request Summary for Issue #9 Completion

---

### Added:

#### `src/components/RegistrationPanel.jsx`

- This component was added to the project to handle the registration of new users.
- It will render the `LoginForm` or `SignUpForm` components based on the `registrationType` state.

#### `src/features/users/LoginForm.jsx`

- This component was added to the project to handle the login of existing users.
- It handles a short client-side validation and dispatches the `loginUser`, `setUserSessionToken` reducers from the `users` slice and the `userLogIn` from the users thunk.
- It will also populate the email field after the user has signed up.

#### `src/features/users/SignUpForm.jsx`

- This component was added to the project to handle the registration of new users.
- It handles a through client-side validation and dispatches the `loginUser`, `setUserSessionToken`, `setUserEmailForLoginAfterSignUp`, `deactivateRegistrationPanel` and `activateRegistrationPanel` reducers from the `users` slice and the `userSignUp` from the users thunk.

#### `src/features/users/validateUserSignUpInput.js`

- This file was added to the project to handle the client-side validation of the user sign up form.

#### `src/helpers/deleteCookie.js`

- This new helper function is straightforward, it will delete a cookie based on the name provided.

#### `src/styles/components/RegistrationPanel.scss`

- Styles for the `RegistrationPanel` component.

#### `src/styles/features/users/RegistrationForm.scss`

- Styles for the `RegistrationForm` component.

---

### Modified:

#### `/src/components/Layout.jsx`

- Imported `RegistrationPanel` and accessed the users state to conditionally render the `RegistrationPanel` component based on the `active` state of the `users` state.

#### `src/components/NavigationLinks.jsx`

- Rename `userLogout` import as now is imported as named export.
- Imported the `acivateRegistrationPanel` and `logoutUser` reducers from the `users` slice.
- This two reducers will be dispatched when the user clicks on the `login` or `register` links.

#### `src/features/users/userThunk.js`

- I have imported the `deleteCookie` helper function.
- I have added two new thunks `userSignUp` and `userLogIn` to handle the user registration and login.
- And I have modified the `userLogout` thunk to delete the `sessionToken` cookie.

#### `src/features/users/usersSlice.js`

- Now the `users` slice will have the following state:
  - `email` - The email of the user.
  - `registrationPanel` object with the following properties:
    - `active` - A boolean to determine if the registration panel is active.
    - `registrationType` - A string to determine if the registration panel is for login or sign up.
- New reducers were added to handle the user email, the activation and deactivation of the registration panel and the user logout, as well as setting te session token.

#### `src/features/vehicles/VehicleDetail.jsx`

- Besides the prettier formatting, I have added modified the `login` React Link (which now is an HTML anchor tag) to invoke the `handleLoginPanel` function and dispatch the `activateRegistrationPanel` reducer from the `users` slice.

#### `src/features/vehicles/vehiclesSlice.js`

- I have just renamed the `createAsyncReducer` import file name.

#### `src/helpers/apiRequest.js` IMPORTANT CHANGES

- A new conditional for checking the document cookie was added to the `apiRequest` function.
- Two new conditionals for the response.status, for 422 and 200.
- The error throwing will now have conditional messages based on the response nullity and status.

#### `src/pages/AddVehiclePage.jsx`

- I have just added a new div for the desktop background image.

#### `src/styles/index.scss`

- Just added overflow hidden to the html, because when the RegistrationPanel is active, the body will scroll horizontally.

#### `src/styles/pages/AddVehiclePage.scss`

- Added a new class for the desktop background image and its styles.

#### `src/styles/pages/ReservationPage.scss`

- I have just added new styles for the `registration-page__demo-video` class in the 992px desktop breakpoint.

---

### Renamed:

#### `src/helpers/createAsyncThunk.js **→** src/helpers/createAsyncReducer.js`

---

#### NOTE:

> Important comment on commit [0f8d30c](https://github.com/ITurres/tesla-booking-front-end/commit/0f8d30ccb0aba26eee7ef425d2e41d86673dd26a), I truly encourage you to read it and understand the why of the lack of commits for certain files. Once again, thank you for your time and understanding.

---

### Deleted:

#### `pr.md`

- This file was deleted as it was not needed for the completion of the issue.

#### Bug Fixes:

#### `src/features/reservations/ReservationsList.jsx`

- I have added an extra condition in case the `reservations` array is null.

---

#### Thank you for reviewing this PR. Feel free to reach out on Slack as _**Arturo (Arthur) Emanuel Guerra Iturres**_ for any queries or further assistance. 🌟
