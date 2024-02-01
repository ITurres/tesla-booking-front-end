const validateUserSignUpInput = (data) => {
  const validUserNameRegex = /^[a-zA-Z0-9_ ]{3,30}$/;
  const validEmailRegex = /^[\w.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const { user_name: userName, email, password } = data;

  if (!userName || !userName.match(validUserNameRegex)) {
    return { valid: false, errorMessage: 'Invalid user name.' };
  }

  if (!email || !email.match(validEmailRegex)) {
    return {
      valid: false,
      errorMessage: 'Invalid email: e.g example@gmail.com',
    };
  }

  if (!password || !password.match(validPasswordRegex)) {
    return {
      valid: false,
      errorMessage:
        'Invalid password: must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number.',
    };
  }

  return { valid: true };
};

export default validateUserSignUpInput;
