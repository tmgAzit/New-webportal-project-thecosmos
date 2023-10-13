import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AttendanceForm() {
  const [students, setStudents] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [attendanceData, setAttendanceData] = useState({}); // Use an object to store attendance data

  useEffect(() => {
    axios.get('http://localhost/guardian_web_portal/childprofile.php')
      .then((response) => {
        setStudents(response.data.phpresult);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
      });
  }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleStudentAttendanceChange = (childId, status) => {
    setAttendanceData({ ...attendanceData, [childId]: status });
  };

  const submitAttendance = () => {
    if (Object.keys(attendanceData).length === 0) {
      alert('No students found to mark attendance for.');
      return;
    }

    const requestData = {
      date: selectedDate,
      attendance: attendanceData,
    };

    axios.post('http://localhost/guardian_web_portal/attendance.php', requestData, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if (response.data.success) {
          alert('Attendance updated successfully.');
        } else {
          alert('Failed to update attendance.');
        }
      })
      .catch((error) => {
        console.error('Error updating attendance:', error);
        alert('Failed to update attendance.');
      });
  };

  return (
    <section className='attendance-form'>
      <h3 className='profile-title'>Mark Student Attendance</h3>
      <label>
        Select Date:
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </label>

      <table className='attendance-table'>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.length > 0 ? (
              students.map((student) => (
                <tr key={student.child_id}>
                  <td>{student.child_id}</td>
                  <td>{student.first_name}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={attendanceData[student.child_id] === 1}
                      onChange={(e) => handleStudentAttendanceChange(student.child_id, e.target.checked ? 1 : 0)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No students found.</td>
              </tr>
            )}
        </tbody>
      </table>

      <button className='submit-button' onClick={submitAttendance}>Submit Attendance</button>
    </section>
  );
}

export default AttendanceForm;
