import React, {useState } from "react";
import logo from '../images/logo.svg';
import heroImage from '../images/Hero Image.jpeg';
import { FormInput, SubmitForm } from './FormInput';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
 
export default function Login() {
  let navigate = useNavigate();

  const [user,setUser] = useState({email:'', password:''})
  const handleChange=(e)=>{
    setUser({...user, [e.target.name]:e.target.value});
  }

  const handleSubmit =async(e)=>{
    e.preventDefault();
    const sendData = {
      email:user.email,
      password:user.password
    }

    //console.log(sendData)

    axios.post('http://localhost/guardian_web_portal/login.php', sendData)
    .then((result)=>{
      if (result.data.Status === "200"){
        window.localStorage.setItem('role', result.data.user_role);
        window.localStorage.setItem('user_id', result.data.user_id);
        window.localStorage.setItem('first_name', result.data.first_name);
        window.localStorage.setItem('last_name', result.data.last_name);
        window.localStorage.setItem('email', result.data.Email);
        navigate('/')

        // window.localstorage.setItem('first_name', (result.data.first_name));
        // window.localstorage.setItem('last_name', (result.data.last_name));
        // // alert('Login Sucessfull.')
        // navigate('/')
        
      }
      else {
        alert('Invalid User')

      }
    })
  }
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
            label='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
          <FormInput
            type='password'
            label='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
          <SubmitForm text='login'/>
        </Form>

        {/* render users */}
        <h4>Users</h4>
        
      </section>
    </>
  );
}

