## Pull Request Summary for Issue #7 Completion

---

### Added:

#### `/src/features/vehicles/AddVehicleForm.jsx`

- This new feature component renders a form to add a new vehicle to the list of vehicles as well as to the API.
- Client side validation is implemented to ensure that the user enters valid vehicle information.

#### `/src/helpers/createAsyncThunk.js`

- This new helper function is used to create a thunk action creator that dispatches the `pending`, `fulfilled`, and `rejected` actions for a given async action.
- This will help us to reduce the amount of boilerplate code in our thunks.

#### `/src/pages/AddVehiclePage.jsx`

- This new page component renders the `AddVehicleForm` component.

#### `/src/styles/features/vehicles/AddVehicleForm.scss`

- This new stylesheet contains the styles for the `AddVehicleForm` component.

#### `/src/styles/pages/AddVehiclePage.scss`

- This new stylesheet contains the styles for the `AddVehiclePage` component.

---

### Modified:

#### `/src/app/App.jsx`

- Imported and render the `AddVehiclePage` component.
- Wrap the `ReservationPage` and `AddVehiclePage` components in a fragment.

#### `/src/app/store.js`

- Renamed the `vehiclesList` reducer to `vehicles` and its imports accordingly.

#### `/src/features/reservations/ReservationForm.jsx`

- Since the `vehicles` reducer has been renamed, I have updated the `useSelector` hook to reflect the change.

#### `/src/features/vehicles/VehiclesList.jsx`

- The vehicles thunk `fetchVehicles` has been named imported instead of default imported.
- The `useSelector` hook has been updated to reflect the change in the `vehicles` reducer name.

#### `/src/features/vehicles/VehiclesThunk.jsx`

- A new thunk `postNewVehicle` has been added to the `vehicles` thunk file to handle the POST request to the API.

#### `/src/pages/VehiclesPage.jsx`

- Only the import path has been updated to reflect the new `vehicles` folder name.

#### `/src/styles/index.scss`

- A new local variable `$success-color` has been added for any success messages or style related to success.
- I have added the `textarea` selector to the group of inputs and select styles.
- As mentioned below, the `.btn.form__error` selector has been moved from the `ReservationForm.scss` file to this file.
- A new `.btn.form__success` selector has been added to style success messages.

---

### Renamed:

#### `/src/features/vehiclesList/` to `/src/features/vehicles/`

- The `vehiclesList` folder has been renamed to `vehicles` to better reflect the purpose of the feature and the variety of components it contains.

##### NOTE: Since the `vehiclesList` folder has been renamed, the following files within will appear as deleted and as new files in the PR. However, the files have not been deleted, they have only been renamed.

- `/src/features/vehiclesList/VehiclesSlice.jsx` to `/src/features/vehicles/VehiclesSlice.jsx`.
- `/src/features/vehiclesList/VehiclesThunk.jsx` to `/src/features/vehicles/VehiclesThunk.jsx`.
- `/src/features/vehiclesList/SplideCarousel.jsx` to `/src/features/vehicles/SplideCarousel.jsx
- `/src/features/vehiclesList/VehiclesList.jsx` to `/src/features/vehicles/VehiclesList.jsx`.

---

### Deleted:

#### `/src/styles/features/reservations/ReservationForm.scss`

- I have removed the `.btn.form__error` selector from this file since it will be moved to the `index.scss` file.

---

#### Thank you for reviewing this PR. Feel free to reach out on Slack as _**Arturo (Arthur) Emanuel Guerra Iturres**_ for any queries or further assistance. 🌟
