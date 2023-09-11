import { ChildProfile, FamilyDetails } from './Profile/index';
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
