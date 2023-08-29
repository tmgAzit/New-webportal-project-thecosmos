import logo from '../images/logo.jpeg';
function Navbar() {
  return (
    <>
      <section className='main navbar-container'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navbar-links'>
          <ul>
            <li>
              <a href='#'>Profile</a>
            </li>
            <li>
              <a href='#'>Calender</a>
            </li>
            <li>
              <a href='#'>Medication</a>
            </li>
            <li>
              <a href='#'>Notification</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Navbar;
