import { Medication, FetchMed } from './Medication/index';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MedDashboard() {
  const [users, setUsers] = useState([]);
  const [user_role, setUserRole] = useState('');
  // const [user_id,setAuth2]=useState('');
  useEffect(() => {
    var userRole = localStorage.getItem('role');
    // var userID = localStorage.getItem('user_id');
    setUserRole(userRole);
    // setAuth2(userID);

    axios.get('http://localhost/guardian_web_portal/userdata.php')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);


  return (
    <>      

      <Medication />
      {user_role === 'admin' && <FetchMed />}
    </>
  );
}

export default MedDashboard;
