import { FormInput } from '../../FormInput/index';
import axios from "axios";
import React, {useState }from "react";

function AddMember() {
  const [formvalue, setFormvalue]= useState({firstName:'', lastName:'', age:'', sex:'', address:'', parent_name:'', emergency_contact:''});
    const [message, setMessage]= useState('');
    const handleInput =(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }

  const handleSubmit =async(e)=>{
    setMessage("Record Inserted Successfully!!");
      e.preventDefault();
      const formData= {firstName:formvalue.firstName, lastName:formvalue.lastName, age:formvalue.age, sex:formvalue.sex, address:formvalue.address, parent_name:formvalue.parent_name, emergency_contact:formvalue.emergency_contact}; 
      const res = await axios.post("http://localhost/guardian_web_portal/addchild.php",formData);
      }   

  return (
    <>
      <section className='section-center'>
        <h3 className='profile-title'>create/add {}</h3>
        <em className='input-padding'>{} Please Enter New Child Details (All Fills Are Required)</em>
        <form
          className='form-container form-background'
          action='/newMember'
          onSubmit={handleSubmit}
        >
          <FormInput
            type='text'
            label='first name'
            name='firstName'
            value={formvalue.firstName}
            onChange={handleInput}
            required
          />
          <FormInput
            type='text'
            label='last name'
            name='lastName'
            required
            value={formvalue.lastName}
            onChange={handleInput}
          />
          <FormInput
            type='text'
            label='address'
            name='address'
            value={formvalue.address}
            onChange={handleInput}
            required
          />
          <FormInput
            type='text'
            label='Sex (M/F)'
            name='sex'
            value={formvalue.sex}
            onChange={handleInput}
            required
          />
          <FormInput
            type='float'
            label='age'
            name='age'
            required
            value={formvalue.age}
            onChange={handleInput}
          />
          <FormInput
            type='text'
            label='fathers name'
            name='parent_name'
            value={formvalue.parent_name}
            onChange={handleInput}
            required
          />
          <FormInput
            type='integer'
            label='emergency_contact'
            name='emergency_contact'
            value={formvalue.emergency_contact}
            onChange={handleInput}
            required
          />
          <button type='submit' className='add-btn btn'>
            Create
          </button>
          <p className="text-sucess"> { message }</p>   
        </form>
      </section>
    </>
  );
}

export default AddMember;
