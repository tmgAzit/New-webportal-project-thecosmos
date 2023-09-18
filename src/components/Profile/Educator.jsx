import aadhya from '../../images/child1.jpeg';

import { Link } from 'react-router-dom';
const students = [
  {
    id: 1,
    image: aadhya,
    name: 'Aadhya Silwal',
    age: 4.8,
    sex: 'Female',
    address: '11 Joy Street Ascot Park 5403 SA',
    parents: 'Saroj Silwal',
    contact: '041238765',
  },
];
const ProfileEducator = () => {
  return (
    <section className='section-center'>
      <h3 className='profile-title'>students</h3>
      {students.map((student) => {
        const { id, image, name } = student;
        return (
          <div className='students' key={id}>
            <div className='img-container'>
              <img src={image} alt={name} />
            </div>
            <div className='student-info'>
              <h4>{name}</h4>
              <Link to='/profile/moreinfo' className='moreInfo'>
                more info
              </Link>
            </div>
          </div>
        );
      })}
      <Link to='/profile/addchildren' className='link'>
        + add student
      </Link>
    </section>
  );
};

export default ProfileEducator;
