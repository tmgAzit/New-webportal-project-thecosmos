import { Student, Educator } from './Profile/index';
import { Outlet } from 'react-router-dom';
function Profile() {
  return (
    <>
      <Educator />
      {/* <Student /> */}

      <Outlet />
    </>
  );
}

export default Profile;
