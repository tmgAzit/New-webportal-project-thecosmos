import logo from '../images/logo.svg';
import { NavLink, Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    url: 'profile',
    text: 'profile',
  },
  {
    id: 2,
    url: 'calendar',
    text: 'calendar',
  },
  {
    id: 3,
    url: 'medication',
    text: 'medication',
  },
  {
    id: 4,
    url: 'notification',
    text: 'notification',
  },
];
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
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <NavLink className='navlink' to={url}>
                  {text}
                </NavLink>
              </li>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Navbar;
