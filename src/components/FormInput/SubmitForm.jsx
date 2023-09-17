import { Link } from 'react-router-dom';
import { SubmitBtn } from './index';
const SubmitForm = () => {
  return (
    <div className='link-container'>
      <input type='checkbox' name='remember' /> Remember me <br />
      <SubmitBtn text='login' />
      <p className='psw'>
        <Link to='/password'>forgot password?</Link>
      </p>
      {/* <p className='psw'>
        not a member? <Link to='/register'>register</Link>
      </p> */}
    </div>
  );
};

export default SubmitForm;
