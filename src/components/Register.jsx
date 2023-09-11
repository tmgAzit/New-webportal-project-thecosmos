import { FormInput, SubmitBtn } from './FormInput';
import { Form, Link } from 'react-router-dom';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center section-center form-container'>
      <Form
        method='POST'
        className='card w=96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 '
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
      </Form>
      <FormInput type='text' label='username' name='username' />
      <FormInput type='email' label='email' name='email' />
      <FormInput type='password' label='password' name='password' />
      <div className='mt-4'>
        <SubmitBtn text='register' />
      </div>
      <p className='psw'>
        Already a member? <Link to='/login'>login</Link>
      </p>
    </section>
  );
};

export default Register;
