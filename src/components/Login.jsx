import { useState } from 'react';
import logo from '../images/logo.svg';
import heroImage from '../images/Hero Image.jpeg';
import { FormInput, SubmitForm } from './FormInput';
import { Form } from 'react-router-dom';
import { data } from './data';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    if (!username || !password) return;
    const randomId = Date.now();
    // console.log(randomId);
    const newUser = { id: randomId, username: username, password: password };
    console.log(newUser);
    const newUsers = [...users, newUser];
    setUsers(newUsers);
    setUsername('');
    setPassword('');
  };

  return (
    <>
      <section className='main section-center'>
        <div className='login-logo '>
          <img src={logo} alt='login logo' />
        </div>
        <Form className='form-container' onSubmit={handleSubmit}>
          <h4>
            <em>Login</em>
          </h4>
          <div className='hero-image'>
            <img src={heroImage} alt='daycare hero photo' />
          </div>

          <FormInput
            type='email'
            label='username'
            name='usernmae'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            type='password'
            label='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SubmitForm text='login' />
        </Form>

        {/* render users */}
        <h4>Users</h4>
        {users.map((user) => {
          const { id, username, password } = user;
          return (
            <div key={id}>
              <h4>{username}</h4>
              <i>{password}</i>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Login;
