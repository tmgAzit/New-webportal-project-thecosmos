import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function FamilyDetails() {
  const [user, setUser] = useState([]);
  const {child_id} = useParams();
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost/guardian_web_portal/familyprofile.php?child_id=${child_id}`);
    setUser(result.data.phpresult);
    console.log(result.data.result);
  };
  useEffect(() => {
    loadUsers();
  }, [child_id]);

  return (
    <>
      <section className='section-center '>
        <h3 className='profile-title'>Family</h3>
        {user.map((res) => {
          // const {
          //   id,
          //   image,
          //   firstName,
          //   lastName,
          //   age,
          //   address,
          //   relation,
          //   contact,
          // } = member;
          return (
            <div className='container'>
              
              <div className='family-details'>
                <table>
                <tr>
                    <th>First Name</th>
                    <td>{res.first_name}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{res.last_name}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{res.address} </td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td>{res.email}</td>
                  </tr>
                  <tr>
                    <th>Relationship</th>
                    <td>{res.relationship}</td>
                  </tr>
                  <tr>
                    <th>Contact:</th>
                    <td>{res.contact}</td>
                  </tr>
                </table>
              </div>
            </div>
          );
        })}

      <Link to="/Profile/AddFamily" className="link">Add Family Member</Link>
      </section>
    </>
  );
}

export default FamilyDetails;
