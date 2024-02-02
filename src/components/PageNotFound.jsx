import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/PageNotFound.scss';

const PageNotFound = () => (
  <div className="not-found-page">
    <div className="not-found-page__content-wrapper">
      <h1>
        <span>404</span>
        &nbsp;- Not Found
      </h1>
      <h4>
        The page you are looking for does not exist or you might need to login
        to access it.
      </h4>
      <Link to="/" className="btn">
        Go back to Home
      </Link>
    </div>
  </div>
);

export default PageNotFound;
