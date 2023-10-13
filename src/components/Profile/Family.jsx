import { useEffect, useState } from 'react';
import axios from 'axios';

const ProfileFamily = () => {
  const [children, setChildren] = useState([]);
  const [user_email, setUserEmail] = useState('');

  const loadChildrenByParent = async () => {
    try {
      const response = await axios.get(`http://localhost/guardian_web_portal/getchild.php?child_id=${child_id}`);
      setChildren(response.data);
    } catch (error) {
      console.error('Error fetching children data:', error);
    }
  };

  useEffect(() => {
    loadChildrenByParent();
  }, []);

  return (
    <section className='section-center'>
      <h3 className='profile-title'>Students</h3>
      {children.map((child) => (
        <div className='students' key={child.child_id}>
          <div className='student-info'>
            <h4>
              {child.child_id} {child.first_name} {child.last_name} {child.age}
            </h4>
            {/* Add other child information here */}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProfileFamily;
