import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [auth,setAuth]=useState('');
  const [user,setAuth1]=useState('');
  const [user_role, setUserRole] = useState('');

  

  useEffect(()=>{
    var auth = localStorage.getItem('first_name');
    var user = localStorage.getItem('last_name');
    var userRole = localStorage.getItem('role');
    setUserRole(userRole);
    setAuth(auth);
    setAuth1(user);
  },[])
  return (
    <header className='header'>
      <div className='header-content'>
        
        <h4 className='welcome'>Welcome, {auth} {user}</h4>
        <Link to='/logout' className='btn'>Logout</Link>
      </div>
    </header>
  );
}

export default Header;
