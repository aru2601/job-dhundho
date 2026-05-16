import React from 'react';
import axios from 'axios';

const Submission = ({ formData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend API endpoint
      await axios.post('/api/submit', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Display a summary of form data for confirmation */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Submission;
