import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ChildProfile() {
  const [user, setUser] = useState([]);
  const { child_id } = useParams();
  const [isEditing, setEditing] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState('');
  const [updatedLastName, setUpdatedLastName] = useState('');
  const [updatedAge, setUpdatedAge] = useState('');
  const [updatedAddress, setUpdatedAddress] = useState('');
  const [updatedEmergencyContact, setUpdatedEmergencyContact] = useState('');

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost/guardian_web_portal/onechild.php?child_id=${child_id}`);
    setUser(result.data.phpresult);
  };

  useEffect(() => {
    loadUsers();
  }, [child_id]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost/guardian_web_portal/updatechild.php', {
        child_id: child_id, // Add child_id to the request data
        first_name: updatedFirstName,
        last_name: updatedLastName,
        age: updatedAge,
        address: updatedAddress,
        emergency_contact: updatedEmergencyContact,
      });
    
  
      if (response.data.message) {
        // Child details updated successfully
        // You can add a success message or other handling here
        setEditing(false);
        loadUsers(); // Refresh the data
      } else {
        // Handle the error
        // You can add an error message or other handling here
      }
    } catch (error) {
      console.error('Axios Error:', error);
    }
  };
  

  return (
    <>
      <section className='section-center '>
        <h3 className='profile-title'>Profile</h3>
        {user &&
          user.map((res) => {
            const { child_id, first_name, last_name, age, sex, address, parent_name, emergency_contact } = res;
            return (
              <div className='container' key={child_id}>
                <div className='child-details'>
                  <table>
                    <tr>
                      <th>Student Number</th>
                      <td>{child_id}</td>
                    </tr>
                    <tr>
                      <th>First Name</th>
                      <td>
                        {isEditing ? (
                          <input
                            type='text'
                            value={updatedFirstName}
                            onChange={(e) => setUpdatedFirstName(e.target.value)}
                          />
                        ) : (
                          first_name
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th>Last Name</th>
                      <td>
                        {isEditing ? (
                          <input
                            type='text'
                            value={updatedLastName}
                            onChange={(e) => setUpdatedLastName(e.target.value)}
                          />
                        ) : (
                          last_name
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th>Age</th>
                      <td>
                        {isEditing ? (
                          <input
                            type='number'
                            value={updatedAge}
                            onChange={(e) => setUpdatedAge(e.target.value)}
                          />
                        ) : (
                          age
                        )}{' '}
                        years
                      </td>
                    </tr>
                    <tr>
                      <th>Sex</th>
                      <td>{sex}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>
                        {isEditing ? (
                          <input
                            type='text'
                            value={updatedAddress}
                            onChange={(e) => setUpdatedAddress(e.target.value)}
                          />
                        ) : (
                          address
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th>Father's Name</th>
                      <td>{parent_name}</td>
                    </tr>
                    <tr>
                      <th>Emergency Contact</th>
                      <td>
                        {isEditing ? (
                          <input
                            type='text'
                            value={updatedEmergencyContact}
                            onChange={(e) => setUpdatedEmergencyContact(e.target.value)}
                          />
                        ) : (
                          emergency_contact
                        )}
                      </td>
                    </tr>
                  </table>
                  {isEditing ? (
                    <button className="save-button" onClick={handleSave}>
                          Save
                    </button>
                  ) : (
                   <button className="edit-button" onClick={handleEdit}>
                           Edit
                   </button>
                  )}

                </div>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default ChildProfile;
