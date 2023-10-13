import React, { useState, useEffect } from 'react';

function FetchRec() {
  const [medicationRecords, setMedicationRecords] = useState([]);

  useEffect(() => {
    const fetchMedicationRecords = async () => {
      try {
        const response = await fetch('http://localhost/guardian_web_portal/getchildrec.php');
        if (!response.ok) {
          throw new Error('Failed to fetch medication records');
        }

        const data = await response.json();
        setMedicationRecords(data);
      } catch (error) {
        console.error('Error fetching medication records:', error);
      }
    };

    fetchMedicationRecords();
  }, []);

  return (
    <section className='section-center'>
      <h3 className='profile-title'>Absent History</h3>
      {/* Container for the table with a maximum height */}
      <div className='table-container'>
        {/* Display medication records in a table */}
        <table>
          <thead>
            <tr>
              <th>Child ID</th>
              <th>Child Name</th>
              <th>Absent Reason</th>
              <th>File Link</th>
            </tr>
          </thead>
          <tbody>
            {medicationRecords.map((record) => (
              <tr key={record.id}>
                <td>{record.child_id}</td>
                <td>{record.first_name}</td>
                <td>{record.reason}</td>
                <td>
                  <a href={`http://localhost/guardian_web_portal/absent_data/${record.file}`} target="_blank" rel="noopener noreferrer">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default FetchRec;
