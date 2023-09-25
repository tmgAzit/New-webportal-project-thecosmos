import { FormInput } from '../../FormInput/index';
import { useState } from 'react';

function AddMember({ text, details }) {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    address: '',
    relation: '',
    age: '',
    contact: '',
  });

  const [data, setData] = useState(details);

  const changeHandler = (e) => {
    // console.log(e.target.name);
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    const randomId = Date.now();
    const { firstName, lastName, address, relation, age, contact } = user;
    if (!firstName || !lastName || !address || !relation || !age || !contact)
      return;
    const newUser = {
      id: randomId,
      firstName: firstName,
      lastName: lastName,
      address: address,
      relation: relation,
      age: age,
      contact: contact,
    };
    const newUsers = [...data, newUser];
    // console.log(newUsers);
    setData(newUsers);
    setUser({
      firstName: '',
      lastName: '',
      address: '',
      relation: '',
      age: '',
      contact: '',
    });

    console.log('data is set successfully');
  };

  return (
    <>
      <section className='section-center'>
        <h3 className='profile-title'>create/add {text}</h3>
        <em className='input-padding'>{text} details</em>
        <form
          className='form-container form-background'
          action='/newMember'
          onSubmit={handleSubmit}
        >
          <FormInput
            type='text'
            label='first name'
            name='firstName'
            value={user.firstName}
            onChange={changeHandler}
            required
          />
          <FormInput
            type='text'
            label='last name'
            name='lastName'
            required
            value={user.lastName}
            onChange={changeHandler}
          />
          <FormInput
            type='text'
            label='address'
            name='address'
            value={user.address}
            onChange={changeHandler}
            required
          />
          <FormInput
            type='text'
            label='Relation'
            name='relation'
            value={user.relation}
            onChange={changeHandler}
            required
          />
          <FormInput
            type='float'
            label='age'
            name='age'
            required
            value={user.age}
            onChange={changeHandler}
          />
          <FormInput
            type='integer'
            label='contact'
            name='contact'
            value={user.contact}
            onChange={changeHandler}
            required
          />
          <button type='submit' className='add-btn btn'>
            Create
          </button>
        </form>
      </section>
    </>
  );
}

export default AddMember;
