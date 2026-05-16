import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonalDetails = () => {
  
  const [formData, setformData] = useState({
    fullName: '',
    email: '',
  })

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  
    return (
    <div>
      <h2>Personal Details</h2>
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
      {/* Add more personal details fields as needed */}
      <Link to="/professional">Next</Link>
    </div>
  );
};

export default PersonalDetails;
