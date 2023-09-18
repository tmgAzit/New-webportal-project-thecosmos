function Status() {
  return (
    <>
      <section className='section-center'>
        <div className='status-feed'>
          <input type='text' placeholder="What's in your mind?" />
          <input type='file' id='myFile' name='filename' />
          <button className='btn'>post</button>
        </div>
      </section>
    </>
  );
}

export default Status;
