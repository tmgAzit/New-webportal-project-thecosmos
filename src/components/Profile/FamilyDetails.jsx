import { Link } from 'react-router-dom';
import { memberDetails } from '../data.js';
// const memberDetails = [
//   {
//     id: 1,
//     image: P1,
//     name: 'Saroj Silwal',
//     age: 35,
//     sex: 'male',
//     address: '11 Joy Street Ascot Park 5403 SA',
//     relation: 'father',
//     contact: '041238765',
//   },
// ];
function FamilyDetails() {
  return (
    <>
      <section className='section-center '>
        <h3 className='profile-title'>Family</h3>
        {memberDetails.map((member) => {
          const {
            id,
            image,
            firstName,
            lastName,
            age,
            address,
            relation,
            contact,
          } = member;
          return (
            <div className='container' key={id}>
              <div className='family-photo'>
                <img src={image} alt="Dad's photo" />
              </div>
              <div className='family-details'>
                <table>
                  <tr>
                    <th>Name</th>
                    <td>{firstName + ' ' + lastName}</td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>{age} years</td>
                  </tr>
                  {/* <tr>
                    <th>Sex</th>
                    <td>{sex}</td>
                  </tr> */}
                  <tr>
                    <th>Address</th>
                    <td>{address}</td>
                  </tr>
                  <tr>
                    <th>Relation</th>
                    <td>{relation}</td>
                  </tr>
                  <tr>
                    <th>contact</th>
                    <td>{contact}</td>
                  </tr>
                </table>
              </div>
            </div>
          );
        })}

        <Link to='/profile/addmember' className='link'>
          + add member
        </Link>
      </section>
    </>
  );
}

export default FamilyDetails;
