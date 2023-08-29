import profilePhoto from '../../images/child1.jpeg';
function ChildProfile() {
  return (
    <>
      <section className='section-center '>
        <h3 className='profile-title'>Profile</h3>
        <div className='container'>
          <div className='child-photo'>
            <img src={profilePhoto} alt="child's photo" />
          </div>
          <div className='child-details'>
            <table>
              <tr>
                <th>Name</th>
                <td>Aadhya silwal</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>4y 8months</td>
              </tr>
              <tr>
                <th>Sex</th>
                <td>Female</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>11 joy street ascot park 5403 SA</td>
              </tr>
              <tr>
                <th>Parents</th>
                <td>Saroj silwal</td>
              </tr>
              <tr>
                <th>contact:</th>
                <td>0481238765</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChildProfile;
