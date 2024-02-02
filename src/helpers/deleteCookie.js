function deleteCookie(cookieName) {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${cookieName}=`));

  if (cookieValue) {
    // ? Clears the cookie by setting an empty value and an expired date.
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  } else {
    throw new Error(`The cookie "${cookieName}" does not exist`);
  }
}

export default deleteCookie;
