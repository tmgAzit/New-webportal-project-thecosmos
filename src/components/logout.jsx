import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Logout() {
    let navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost/guardian_web_portal/logout.php')
      .then((response) => {
        // Clear local storage or perform any other necessary cleanup actions
        localStorage.clear();
        // Redirect the user to the login page or any other desired page after logout.
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  }, [history]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
}

export default Logout;
