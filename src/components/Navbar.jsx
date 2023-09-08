import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <section className='main navbar-container'>
        <div className='logo'>
          <Link>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='navbar-links'>
          <ul>
            <li>
              <Link to='/profile'>profile</Link>
            </li>
            <li>
              <Link to='/calendar'>calendar</Link>
            </li>
            <li>
              <Link to='/medication'>medication</Link>
            </li>
            <li>
              <Link to='/notification'>notification</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
