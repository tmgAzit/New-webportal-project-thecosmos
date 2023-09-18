import { useEffect, useState } from 'react';
import logo from '../images/logo.svg';
import heroImage from '../images/Hero image.jpeg';
import { FormInput, SubmitForm } from './FormInput';
import { Form } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    console.log(() => {
      e.target.value();
    });
    setUsername();
    setPassword();
  };

  useEffect(() => {
    setUser();
  }, []);

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
            onChange={handleSubmit}
          />
          <FormInput
            type='password'
            label='password'
            name='password'
            defaultValue='secret'
            onChange={handleSubmit}
          />
          <SubmitForm text='login' onClick={() => alert('logged in!')} />
        </Form>
      </section>
    </>
  );
}

export default Login;
