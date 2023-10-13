import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MarkCalendar({}) {
  const [absent, setAbsent] = useState(false);
  const [reason, setReason] = useState('');
  const [child_id, setChildId] = useState('');
  const [file, setFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (e) => {
    setAbsent(e.target.checked);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };
  const handleChildidChange = (e) => {
    setChildId(e.target.value);
  };
  const handleFileChange = (e) => {
    // Handle file selection
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('child_id', child_id); // Pass child_id
    formData.append('absent', absent);
    formData.append('reason', reason);
    formData.append('file', file);

    // Send the data to the backend
    axios.post('http://localhost/guardian_web_portal/absent.php', formData)
      .then((response) => {
        // Handle the response from the backend
        if (response.data.message) {
          // Show a success message
          setSuccessMessage('Record added successfully.');
          setErrorMessage('');
          // Clear the form inputs
          setAbsent(false);
          setReason('');
          setChildId('');
          setFile(null);
        } else {
          // Handle other messages or errors
          setErrorMessage('Error: ' + response.data.error);
          setSuccessMessage('');
        }
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        setErrorMessage('Error: ' + error.message);
        setSuccessMessage('');
      });
  };

  return (
    <section className='section-center'>
      <h3 className='calendar-title'>For Attention</h3>
      <div className='forAttention'>
        <label className='cannot-attend'>
          <input type='checkbox' name='absent' onChange={handleCheckboxChange} /> Cannot Attend
          <br />
        </label>

        <form className='form-container form-background' onSubmit={handleSubmit}>
          <h4>
            <label htmlFor='reason'>Child ID:</label>
          </h4>

          <textarea
            id='w3review'
            name='child_id'
            rows='4'
            cols='50'
            value={child_id}
            onChange={handleChildidChange}
          ></textarea>
          <h4>
            <label htmlFor='reason'>Reasons of absent:</label>
          </h4>

          <textarea
            id='w3review'
            name='reason'
            rows='4'
            cols='50'
            value={reason}
            onChange={handleReasonChange}
          ></textarea>
          <input type='file' onChange={handleFileChange} />
          <button className='btn reason-btn' type='submit'>
            Submit
          </button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Link to='/medication'>
          <h4 className='medical '> for medical attention request</h4>
        </Link>
      </div>
    </section>
  );
}

export default MarkCalendar;
