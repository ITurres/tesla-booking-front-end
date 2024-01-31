const apiRequest = async (path, method = 'GET', body = {}) => {
  const baseUrl = process.env.REACT_APP_TESLA_API_BASE_URL;
  const fetchOptions = {
    method,
    headers: { 'Content-type': 'application/json' },
  };

  if (method !== 'GET') {
    fetchOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(`${baseUrl}${path}`, fetchOptions);

    if (response.ok) {
      const result = await response.json();

      if (result.status.code === 200) {
        return result.data;
      }

      throw new Error(result.status.message);
    }
    throw new Error('Something went wrong...');
  } catch (error) {
    throw new Error(error.message);
  }
};

export default apiRequest;
