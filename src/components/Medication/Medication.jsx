import React, { useState } from 'react';
import axios from 'axios';

function Medication() {
  const [child_id, setChildID] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [instructions, setInstructions] = useState('');
  const [file, setFile] = useState(null);
  const [expiryDate, setExpiryDate] = useState('');
  const [dosagePerDay, setDosagePerDay] = useState('');
  const [timesPerDay, setTimesPerDay] = useState('');
  const [guardianSignature, setGuardianSignature] = useState('');
  const [medicationRecords, setMedicationRecords] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('child_id', child_id);
    formData.append('medicineName', medicineName);
    formData.append('instructions', instructions);
    formData.append('expiryDate', expiryDate);
    formData.append('dosagePerDay', dosagePerDay);
    formData.append('timesPerDay', timesPerDay);
    formData.append('guardianSignature', guardianSignature);
    
    

    try {
      const response = await axios.post('http://localhost/guardian_web_portal/addmedication.php', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        
      });
      console.log(response);

      // Handle the response from the server (e.g., show a success message)
      console.log('Prescription uploaded successfully:', response.data);
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error uploading prescription:', error);
    }
  };

  return (
    <section className='section-center'>
      <h3 className='profile-title'>Medical History</h3>
      <form className='form-container form-background' onSubmit={handleSubmit}>
        <em>For more directions!</em>
        <h3>Medicine Usage</h3>
        <label htmlFor='child_id'>Child ID</label>
        <input
          type='text'
          id='child_id'
          value={child_id}
          onChange={(e) => setChildID(e.target.value)}
          required
        />
        <label htmlFor='medicineName'>Medicine Name</label>
        <input
          type='text'
          id='medicineName'
          value={medicineName}
          onChange={(e) => setMedicineName(e.target.value)}
          required
        />
        <label htmlFor='instructions'>Instructions</label>
        <textarea
          name='instructions'
          id='instructions'
          cols='50'
          rows='4'
          placeholder='Instructions.... (Allergies)(Diet)'
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        ></textarea>
        <label htmlFor='expiryDate'>Expiry Date</label>
        <input
          type='date'
          id='expiryDate'
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <label htmlFor='dosagePerDay'>Dosage Per Day</label>
        <input
          type='number'
          id='dosagePerDay'
          value={dosagePerDay}
          onChange={(e) => setDosagePerDay(e.target.value)}
          required
        />
        <label htmlFor='timesPerDay'>Times Per Day</label>
        <input
          type='number'
          id='timesPerDay'
          value={timesPerDay}
          onChange={(e) => setTimesPerDay(e.target.value)}
          required
        />
        <label htmlFor='guardianSignature'>Guardian Signature</label>
        <input
          type='text'
          id='guardianSignature'
          value={guardianSignature}
          onChange={(e) => setGuardianSignature(e.target.value)}
          required
        />
        <label htmlFor='prescription'>Upload Prescription</label>
        <input
          type='file'
          id='prescription'
          accept='.pdf,.jpg,.jpeg,.png'
          onChange={handleFileChange}
          required
        />
        <button type='submit' className='btn medUsage-btn'>
          Submit
        </button>
      </form>
    </section>

    
    
  );
  
}

export default Medication;
