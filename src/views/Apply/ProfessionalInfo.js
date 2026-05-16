import React from 'react';
import { Link } from 'react-router-dom';

const ProfessionalInfo = ({ formData, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <h2>Professional Information</h2>
      <input type="text" name="jobTitle" placeholder="Job Title" value={formData.jobTitle} onChange={handleInputChange} />
      {/* Add more professional information fields as needed */}
      <Link to="/confirmation">Next</Link>
    </div>
  );
};

export default ProfessionalInfo;
