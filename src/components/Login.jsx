import logo from '../images/logo.svg';
import heroImage from '../images/Hero image.jpeg';
import { FormInput, SubmitForm } from './FormInput';
import { Form } from 'react-router-dom';
function Login() {
  return (
    <>
      <section className='main section-center'>
        <div className='login-logo '>
          <img src={logo} alt='login logo' />
        </div>
        <Form className='form-container'>
          <h4>
            <em>Login</em>
          </h4>
          <div className='hero-image'>
            <img src={heroImage} alt='daycare hero photo' />
          </div>

          <FormInput
            type='email'
            label='username'
            name='identifier'
            defaultValue='test@test.com'
          />
          <FormInput
            type='password'
            label='password'
            name='password'
            defaultValue='secret'
          />
          <SubmitForm text='login' />
        </Form>
      </section>
    </>
  );
}

export default Login;
