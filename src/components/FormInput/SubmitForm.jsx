import { Link } from 'react-router-dom';
import { SubmitBtn } from './index';
const SubmitForm = ({ onSubmit }) => {
  return (
    <div className='link-container'>
      <input type='checkbox' name='remember' /> Remember me <br />
      <SubmitBtn text='login' onSubmit={onSubmit} />
      <p className='psw'>
        <Link to='/password'>forgot password?</Link>
      </p>
    </div>
  );
};

export default SubmitForm;
