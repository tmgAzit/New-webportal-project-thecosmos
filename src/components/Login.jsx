import logo from '../images/logo.jpeg';
import heroImage from '../images/Hero image.jpeg';
function Login() {
  return (
    <>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='section-center'>
        <form action='/' method='post'>
          <div className='hero-image'>
            <img src={heroImage} alt='daycare hero photo' />
          </div>
          <div className='login-container'>
            <label htmlFor='username'>
              <br /> Username <br />
            </label>
            <input
              type='text'
              placeholder='Enter username'
              name='username'
              required
            />
            <label htmlFor='password'>
              <br />
              Password <br />
            </label>
            <input
              type='text'
              placeholder='Enter password'
              name='password'
              required
            />
            <label>
              <input type='checkbox' name='remember' /> Remember me <br />
            </label>
            <button className='btn loginBtn' type='submit'>
              login
            </button>
          </div>
          <div className='container'>
            <span className='psw'>
              <a href='#'>forgot password?</a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
