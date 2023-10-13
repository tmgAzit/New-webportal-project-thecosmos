import { useState } from 'react';
import { FormInput, SubmitBtn } from './FormInput';
import { Form, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  let navigate = useNavigate();
  const [message, setMessage]= useState('');
  const [data, setData]=useState({
    first_name:'',
    last_name:'',
    email:'',
    password:''
  })

  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value})
    //console.log(data);
  }
const handleSubmit =async(e)=>{
  setMessage("Record Inserted Successfully!!");
  e.preventDefault();
  const sendData = {
    first_name:data.first_name,
    last_name:data.last_name,
    email:data.email,
    password:data.password
  }
  console.log(sendData)

  axios.post('http://localhost/guardian_web_portal/register.php', sendData)
  .then((result)=>{
    if (result.data.Status === "Invalid"){

      alert('Invalid User');

      
    }
    else {
      navigate('/login');

    }
  })
  
}


  return (
    <section className='h-screen grid place-items-center section-center form-container'>
      <Form 
        method='POST'
        className='card w=96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 '
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
      </Form>
      
      <FormInput type='text' label='First Name' name='first_name' onChange={handleChange} value={data.first_name}/>
      <FormInput type='text' label='Last Name' name='last_name' onChange={handleChange} value={data.last_name}/>
      <FormInput type='email' label='email' name='email' onChange={handleChange} value={data.email}/>
      <FormInput type='password' label='password' name='password' onChange={handleChange} value={data.password}/>
      <div className='mt-4'>
        <SubmitBtn text='register' onClick={handleSubmit}/>
        <p className="text-sucess"> { message }</p>   
      </div>
      <p className='psw'>
        Already a member? <Link to='/login'>login</Link>
      </p>
    </section>
  );
};

export default Register;
