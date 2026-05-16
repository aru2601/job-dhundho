import React from 'react';
import { Link } from 'react-router-dom';

const Confirmation = ({ formData }) => {
  return (
    <div>
      <h2>Confirmation</h2>
      {/* Display a summary of the form data for confirmation */}
      <Link to="/submission">Confirm and Submit</Link>
    </div>
  );
};

export default Confirmation;
