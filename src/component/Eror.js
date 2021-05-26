import React from 'react';
import { Link } from 'react-router-dom';

const Errors = () => {
  return (
    <div className="banner">
      <h1>404</h1>
      <div />
      <p>Page Not Found</p>
      <Link to="/" className="btn-primary">
        Return To the Home Page
      </Link>
    </div>
  );
};

export default Errors;
