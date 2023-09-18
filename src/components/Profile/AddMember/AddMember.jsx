import { FormInput } from '../../FormInput/index';
function AddMember({ text }) {
  return (
    <>
      <section className='section-center'>
        <h3 className='profile-title'>create/add {text}</h3>
        <em className='input-padding'>{text} details</em>
        <form className='form-container form-background' action='/newMember'>
          <FormInput
            type='text'
            label='first Name'
            name='identifier'
            required
          />
          <FormInput type='text' label='last name' name='identifier' required />
          <FormInput type='text' label='Relation' name='identifier' required />
          <FormInput type='float' label='age' name='identifier' required />
          <FormInput
            type='integer'
            label='contact'
            name='identifier'
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
