function Medication() {
  return (
    <>
      <section className='section-center'>
        <h3 className='medical-title'>Medical History</h3>
        <input type='file' />
        <form className='form-container medication-details'>
          <em>for more directions!</em>
          <h3>Medicine usage</h3>
          <label htmlFor='useMedicine'>Medicine Name</label>
          <input type='text' />
          <textarea
            name='instruction'
            id=''
            cols='50'
            rows='4'
            placeholder='Instructions....'
          ></textarea>
          <button type='submit' className='btn medUsage-btn'>
            submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Medication;
