import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
      <div className='header-content'>
        <h4 className='welcome'>Welcome, Mr Ajit </h4>
        <Link to='/login' className='btn'>
          sign in / sign out
        </Link>
      </div>
    </header>
  );
}

export default Header;
