import getCookie from './getCookie';

const apiRequest = async (path, method = 'GET', body = {}) => {
  const baseUrl = process.env.REACT_APP_TESLA_API_BASE_URL;
  const fetchOptions = {
    method,
    headers: { 'Content-type': 'application/json' },
  };

  if (method !== 'GET') {
    fetchOptions.body = JSON.stringify(body);
  }

  // ? If the user has signup/login, we have the token, so we can
  // ? have access to user's related data.
  const cookieData = getCookie('tesla-booking-user-token');
  if (cookieData) {
    const tokenValue = cookieData.split('=')[1];

    fetchOptions.headers.Authorization = tokenValue;
  }

  try {
    const response = await fetch(`${baseUrl}${path}`, fetchOptions);

    if (response.status === 422) {
      const result = await response.json();

      throw new Error(result.status.message);
    }

    if (response.ok) {
      const result = await response.json();

      if (result.status === 200) {
        return result;
      }

      // ? our API response.
      if (result.status.code === 200) {
        return result.data;
      }

      throw new Error(result.status.message || result.error.message);
    }

    const errorResult = await response.json();
    throw new Error(errorResult.status.message || 'Something went wrong...');
  } catch (error) {
    throw error.message || 'apiRequest: Something went wrong...';
  }
};

export default apiRequest;
