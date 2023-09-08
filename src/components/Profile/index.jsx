import ChildProfile from './ChildProfile';
import FamilyDetails from './FamilyDetails';
import { Outlet } from 'react-router-dom';

function Profile() {
  return (
    <>
      <ChildProfile />
      <FamilyDetails />
      <Outlet />
    </>
  );
}

export default Profile;
