import { students } from '../data.js';
// const students = [
//   {
//     id: 1,
//     image: aadhya,
//     name: 'Aadhya Silwal',
//     age: 4.8,
//     sex: 'Female',
//     address: '11 Joy Street Ascot Park 5403 SA',
//     parents: 'Saroj Silwal',
//     contact: '041238765',
//   },
// ];
function ChildProfile() {
  return (
    <>
      <section className='section-center '>
        <h3 className='profile-title'>Profile</h3>
        {students.map((student) => {
          const { id, image, name, age, sex, address, parents, contact } =
            student;
          return (
            <div className='container' key={id}>
              <div className='child-photo'>
                <img src={image} alt="child's photo" />
              </div>
              <div className='child-details'>
                <table>
                  <tr>
                    <th>Name</th>
                    <td>{name}</td>
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
                    <th>Parents</th>
                    <td>{parents}</td>
                  </tr>
                  <tr>
                    <th>contact:</th>
                    <td>{contact}</td>
                  </tr>
                </table>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ChildProfile;
