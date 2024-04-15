const getCookie = (cookieName) => {
  if (document.cookie.includes(`${cookieName}`)) {
    const cookieData = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith(`${cookieName}=`));

    if (cookieData) {
      return cookieData;
    }
  }

  return null;
};

export default getCookie;
