const apiRequest = async (path, method = 'GET', body = {}) => {
  // ! IMPORTANT please change the path below to REACT_APP_TESLA_API_BASE_URL once backend is ready.
  const baseUrl = process.env.PUBLIC_URL; // ?this will fetch the json files from the public folder.

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
      return await response.json();
    }

    throw new Error('Something went wrong...');
  } catch (error) {
    throw new Error(error);
  }
};

export default apiRequest;
