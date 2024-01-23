const apiRequest = async (path, method = 'GET', body = {}) => {
  const baseUrl = process.env.REACT_APP_TESLA_API_BASE_URL;

  const fetchOptions = {
    method,
    body: JSON.stringify(body),
    headers: { 'content-type': 'application/json' },
  };

  try {
    const response = await fetch(`${baseUrl}${path}`, fetchOptions);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Something went wrong...');
  } catch (error) {
    throw new Error(error);
  }
};

export default apiRequest;
