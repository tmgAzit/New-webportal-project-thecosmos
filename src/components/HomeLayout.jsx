import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;
