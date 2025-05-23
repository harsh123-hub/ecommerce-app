import React from 'react';

const Spinner = () => (
  <div className="d-flex justify-content-center my-5">
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Spinner;
