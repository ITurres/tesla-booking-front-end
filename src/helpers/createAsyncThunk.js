// ? Reducer helper function to create the async reducers, for actions such as
// ? `fetchVehicles`, `postVehicle`, `deleteVehicle`, etc.
// * helps reduce boilerplate code.
const createAsyncReducer = (asyncAction, sliceName) => (builder) => {
  builder
    .addCase(asyncAction.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }))
    .addCase(asyncAction.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      error: null,
      [sliceName]: action.payload,
    }))
    .addCase(asyncAction.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
};

export default createAsyncReducer;
