import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Notification = () => {
  const params = useParams();
  const [children, setChildren] = useState([]);
  const [user_role, setUserRole] = useState('');
  const [userLastName, setUserLastName] = useState('');

  useEffect(() => {
    var lastName = localStorage.getItem('last_name');
    var userRole = localStorage.getItem('role');

    if (lastName && userRole) {
      setUserLastName(lastName);
      setUserRole(userRole);

      //loadChildren();
    }
  }, [user_role, userLastName]);

  // Fetch initial data on component load or login
  useEffect(() => {
    loadChildrenWithStatus();
  }, [user_role, userLastName]);

  const loadChildrenWithStatus = async () => {
    try {
      let response;
      if (user_role === 'admin') {
        response = await axios.get('http://localhost/guardian_web_portal/childprofile.php');
      } else {
        response = await axios.get(
          `http://localhost/guardian_web_portal/getchild.php?parent_last_name=${userLastName}`
        );
      }
      const childStatusPromises = response.data.phpresult.map(async (child) => {
        const checkinResponse = await axios.get(
          `http://localhost/guardian_web_portal/get_checkin_status.php?childId=${child.child_id}`
        );
        child.checkedIn = checkinResponse.data.status === '1';
        return child;
      });

      // Resolve the promises and set the children state
      const childrenWithStatus = await Promise.all(childStatusPromises);
      setChildren(childrenWithStatus);
    } catch (error) {
      console.error('Error fetching children data:', error);
    }
  };

  const handleCheckIn = async (childId) => {
    try {
      const response = await axios.post('http://localhost/guardian_web_portal/checked_in.php', {
        childId,
      });

      if (response.data.success) {
        console.log(`Child ${childId} has been checked in.`);
        setChildren((prevChildren) =>
          prevChildren.map((child) =>
            child.child_id === childId ? { ...child, checkedIn: true } : child
          )
        );
      } else {
        console.error(`Failed to check in Child ${childId}`);
      }
    } catch (error) {
      console.error(`Error checking in Child ${childId}:`, error);
    }
  };

  const handleCheckOut = async (childId) => {
    try {
      const response = await axios.post('http://localhost/guardian_web_portal/checked_out.php', {
        childId,
      });

      if (response.data.success) {
        console.log(`Child ${childId} has been checked out.`);
        setChildren((prevChildren) =>
          prevChildren.map((child) =>
            child.child_id === childId ? { ...child, checkedIn: false } : child
          )
        );
      } else {
        console.error(`Failed to check out Child ${childId}`);
      }
    } catch (error) {
      console.error(`Error checking out Child ${childId}:`, error);
    }
  };

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
              {user_role !== 'admin' && (
                <div className="status">
                  <span className={`status-text ${child.checkedIn ? 'checked-in' : 'checked-out'}`}>
                  Status: {child.checkedIn ? 'Checked In' : 'Checked Out'}
                  </span>
                </div>
              )}
              {user_role === 'admin' ? (
                <button
                  onClick={() =>
                    child.checkedIn
                      ? handleCheckOut(child.child_id)
                      : handleCheckIn(child.child_id)
                  }
                  style={{
                    backgroundColor: child.checkedIn ? 'green' : 'red',
                  }}
                >
                  {child.checkedIn ? 'Check-Out' : 'Check-In'}
                </button>
              ) : null}
            </div>
          </div>
        ))}
    </section>
  );
};

export default Notification;
