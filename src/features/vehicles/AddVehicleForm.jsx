import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewVehicle } from './vehiclesSlice';
import { postNewVehicle } from './vehiclesThunk';

import '../../styles/features/vehicles/AddVehicleForm.scss';

const AddVehicleForm = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('');
  const [buttonSuccess, setButtonSuccess] = useState(false);

  const minDescriptionLength = 30;
  const minPerformanceDetailsLength = 20;
  const validImageURLRegex = /\bhttps?:\/\/\S+\.(png|jpe?g|gif|bmp|webp)\b/;

  // ? This regex pattern allows for any number of performance details,
  // ? each consisting of a pair of non-comma sequences, possibly followed by
  // ? a parenthesized expression, separated by commas and optional whitespace.
  // * e.g: "310 mi Range (EPA est.), AWD Dual Motor' or similar, Top Speed 140 mph, 0-60 m".
  const validPerformanceDetailsRegex = /^\s*(?:[^,]+ [^,]+(?: \([^)]+\))?,\s*)+[^,]+ [^,]+(?: \([^)]+\))?\s*$/;

  const formRefs = {
    modelNameRef: useRef(null),
    imageURLRef: useRef(null),
    rentalPriceRef: useRef(null),
    descriptionRef: useRef(null),
    performanceDetailsRef: useRef(null),
  };

  const validateFormData = (newVehicleData) => {
    setButtonSuccess(false);

    /* eslint-disable camelcase */
    const {
      car_model_name,
      image,
      rental_price,
      description,
      performance_details_attributes,
    } = newVehicleData;

    const modelName = car_model_name;
    const imageURL = image;
    const rentalPrice = rental_price;
    const performanceDetails = performance_details_attributes;
    /* eslint-enable camelcase */

    if (!modelName) {
      setButtonText('Please enter a valid model name.');
      return false;
    }

    if (!imageURL || !imageURL.match(validImageURLRegex)) {
      setButtonText('Please enter a valid image URL.');
      return false;
    }

    if (!rentalPrice || rentalPrice < 0) {
      setButtonText('Please enter a valid rental price.');
      return false;
    }

    if (!description || description.length < minDescriptionLength) {
      setButtonText('Please enter a valid description.');
      return false;
    }

    if (
      !performanceDetails
      || !performanceDetails.match(validPerformanceDetailsRegex)
    ) {
      setButtonText('Please enter a valid performance details.');
      return false;
    }

    return true;
  };

  // eslint-disable-next-line arrow-body-style
  const formatPerformanceDetailsToArrayOfObjects = (performanceDetails) => {
    return performanceDetails
      .split(',')
      .map((detailData) => ({ detail: detailData }));
  };

  const resetForm = () => {
    formRefs.modelNameRef.current.value = '';
    formRefs.imageURLRef.current.value = '';
    formRefs.rentalPriceRef.current.value = '';
    formRefs.descriptionRef.current.value = '';
    formRefs.performanceDetailsRef.current.value = '';
  };

  const handleSubmit = () => {
    const newVehicleData = {
      car_model_name: formRefs.modelNameRef.current.value,
      image: formRefs.imageURLRef.current.value,
      rental_price: formRefs.rentalPriceRef.current.value,
      description: formRefs.descriptionRef.current.value,
      performance_details_attributes:
        formRefs.performanceDetailsRef.current.value,
    };

    if (validateFormData(newVehicleData)) {
      newVehicleData.performance_details_attributes = formatPerformanceDetailsToArrayOfObjects(
        newVehicleData.performance_details_attributes,
      );

      dispatch(postNewVehicle(newVehicleData))
        .then((vehicleDataFromAPI) => {
          // ? If the payload is other than an object, it means there was an error.
          // ? an example of this is: e.g string: 'Error: Invalid Token'.
          if (typeof vehicleDataFromAPI.payload !== 'object') {
            setButtonText('There was an error type adding the new vehicle.');
            return;
          }

          dispatch(addNewVehicle(vehicleDataFromAPI.payload));

          resetForm();
          setButtonSuccess(true);
          setButtonText('New vehicle added!');
        })
        .catch(() => {
          setButtonText('There was an error adding the new vehicle.');
        });
    }
  };

  return (
    <form className="add-vehicle-form" autoComplete="off">
      <input
        ref={formRefs.modelNameRef}
        name="modelName"
        type="text"
        placeholder="Model Name:"
        required
      />
      <textarea
        ref={formRefs.imageURLRef}
        name="imageURL"
        placeholder="Image URL: It should start with 'http' or 'https' and have a supported image format (png, jpg, jpeg, gif, bmp, webp)."
        cols="30"
        rows="3"
        required
      />
      <input
        ref={formRefs.rentalPriceRef}
        name="rentalPrice"
        type="number"
        placeholder="Rental Price:"
        min={0}
        required
      />
      <textarea
        ref={formRefs.descriptionRef}
        cols="30"
        rows="5"
        placeholder="Description:"
        required
      />
      <textarea
        ref={formRefs.performanceDetailsRef}
        cols="30"
        rows="5"
        minLength={minPerformanceDetailsLength}
        placeholder="Performance Details: please separate each detail with a comma, details must be at most 20 characters long."
        required
      />

      <button
        type="button"
        className={`btn ${buttonText ? 'form__error' : ''} ${buttonSuccess ? 'form__success' : ''}`}
        onClick={handleSubmit}
      >
        {buttonText ? `${buttonText}` : 'Add'}
      </button>
    </form>
  );
};

export default AddVehicleForm;
