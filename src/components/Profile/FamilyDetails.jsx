import P1 from '../../images/P1.jpeg';
import { Link, Outlet } from 'react-router-dom';
function FamilyDetails() {
  return (
    <>
      <section className='section-center '>
        <h3 className='profile-title'>Family</h3>
        <div className='container'>
          <div className='family-photo'>
            <img src={P1} alt="Dad's photo" />
          </div>
          <div className='family-details'>
            <table>
              <tr>
                <th>Name</th>
                <td>saroj silwal</td>
              </tr>
              <tr>
                <th>Age</th>
                <td>35y</td>
              </tr>
              <tr>
                <th>Sex</th>
                <td>male</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>11 joy street ascot park 5403 SA</td>
              </tr>
              <tr>
                <th>Relation</th>
                <td>Saroj silwal</td>
              </tr>
              <tr>
                <th>contact:</th>
                <td>0489763490</td>
              </tr>
            </table>
          </div>
        </div>

        <Link to='/profile/addmember' className='link'>
          add member
        </Link>
      </section>
    </>
  );
}

export default FamilyDetails;
