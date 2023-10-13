import { FormInput } from '../../FormInput/index';
import axios from "axios";
import React, {useState }from "react";

function AddFamily() {
  const [formvalue, setFormvalue]= useState({firstName:'', lastName:'', email:'', address:'', relation:'', contact:''});
    const [message, setMessage]= useState('');
    const handleInput =(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
    }

  const handleSubmit =async(e)=>{
    setMessage("Record Inserted Successfully!!");
      e.preventDefault();
      const formData= {child_id:formvalue.child_id, firstName:formvalue.firstName, lastName:formvalue.lastName, email:formvalue.email, address:formvalue.address, relation:formvalue.relation, contact:formvalue.contact}; 
      const res = await axios.post("http://localhost/guardian_web_portal/addfamily.php",formData);
      }   

  return (
    <>
      <section className='section-center'>
        <h3 className='profile-title'>create/add {}</h3>
        <em className='input-padding'>{} Please Enter Parent Details (All Fills Are Required)</em>
        <form
          className='form-container form-background'
          action='/newMember'
          onSubmit={handleSubmit}
        >
          <FormInput
            type='text'
            label='child id'
            name='child_id'
            value={formvalue.child_id}
            onChange={handleInput}
            required
          />
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
            type='email'
            label='email'
            name='email'
            value={formvalue.email}
            onChange={handleInput}
            // required
          />
          <FormInput
            type='text'
            label='relation'
            name='relation'
            value={formvalue.relation}
            onChange={handleInput}
            required
          />
          <FormInput
            type='integer'
            label='contact'
            name='contact'
            value={formvalue.contact}
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

export default AddFamily;
