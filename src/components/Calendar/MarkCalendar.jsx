import { Link } from 'react-router-dom';
function MarkCalendar() {
  return (
    <section className='section-center'>
      <h3 className='calendar-title'>For Attention</h3>
      <div className='forAttention'>
        <label className='cannot-attend'>
          <input type='checkbox' name='absent' /> Cannot Attend
          <br />
        </label>

        <form className='form-container form-background' action='/'>
          <h4>
            <label htmlFor='reason'>Reasons of absent:</label>
          </h4>

          <textarea id='w3review' name='reason' rows='4' cols='50'></textarea>
          <input type='file' />
          <button className='btn reason-btn' type='submit' value='Submit'>
            Submit
          </button>
        </form>
        <Link to='/medication'>
          <h4 className='medical '> for medical attention request</h4>
        </Link>
      </div>
    </section>
  );
}

export default MarkCalendar;
