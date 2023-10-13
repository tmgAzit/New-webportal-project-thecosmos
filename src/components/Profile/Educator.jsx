import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileEducator = () => {
  const params = useParams();
  const [children, setChildren] = useState([]);
  const [user_role, setUserRole] = useState('');
  const [userlastName, setUserLastName] = useState(''); // Add user_lastName state

  useEffect(() => {
    var lastName = localStorage.getItem('last_name'); // Get the parent's last name
    var userRole = localStorage.getItem('role');

    if (lastName && userRole) {
    setUserLastName(lastName);
    setUserRole(userRole);
    
    loadChildren();
  }
  }, [user_role, userlastName]);

  const loadChildren = async () => {
    try {
      let response;

      if (user_role === "admin") {
        // Admin can see all children
        response = await axios.get('http://localhost/guardian_web_portal/childprofile.php');
      } else {
        // Parent can only see specific children based on their last name
        response = await axios.get(`http://localhost/guardian_web_portal/getchild.php?parent_last_name=${userlastName}`);
      }
      setChildren(response.data.phpresult);
    } catch (error) {
      console.error('Error fetching children data:', error);
    }
  };

  // const loadChildren = async () => {
  //   //e.preventDefault();
  //   try {
      // let response;

      // if (user_role === "admin") {
      //   // Admin can see all children
      //   response = await axios.get('http://localhost/guardian_web_portal/getchild.php');
      // } else {
      //   // Parent can only see specific children based on their last name
      //   response = await axios.get(`http://localhost/guardian_web_portal/getchild.php?parent_last_name=${userlastName}`);
      // }
  //     setChildren(response.data.phpresult);
  //   } catch (error) {
  //     console.error('Error fetching children data:', error);
  //   }
  // };

  return (
    <section className='section-center'>
      <h3 className='profile-title'>Students</h3>
      {children &&
        children.map((child) => (
          <div className='students' key={child.child_id}>
            <div className='student-info'>
              <h4>
                {child.child_id} {child.first_name} {child.last_name} {child.age}
              </h4>
              <Link to={`/profile/moreinfo/${child.child_id}`} className='moreInfo'>
                More Info
              </Link>
            </div>
          </div>
        ))}

      {user_role === 'admin' && (
        <Link to='/profile/addchildren' className='link'>
          + Add Student
        </Link>
      )} 

    </section>
  );
};

export default ProfileEducator;
