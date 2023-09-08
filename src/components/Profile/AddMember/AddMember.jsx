function AddMember() {
  return (
    <>
      <section className='section-center'>
        <h3 className='profile-title'>create/add member</h3>
        <em>member details</em>
        <form className='form-container' action='/newMember'>
          <label htmlFor='firstName'>first name</label>
          <input type='text' required />
          <label htmlFor='lasttName'>last name</label>
          <input type='text' required />
          <label htmlFor=''>Age</label>
          <input type='number' required />
          <label htmlFor='relation'>Relation</label>
          <input type='text' required />
          <label htmlFor='contact'>contact number</label>
          <input type='integer' required />
          <button type='submit' className='btn'>
            Create
          </button>
        </form>
      </section>
    </>
  );
}

export default AddMember;
