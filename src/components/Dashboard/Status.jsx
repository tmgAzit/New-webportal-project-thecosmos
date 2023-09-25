import { useState } from 'react';
import { imagesURLs } from '../data.js';
function Status() {
  const [photo, setPhoto] = useState('');
  const [photoURLs, setPhotoURLs] = useState(imagesURLs);

  function handlePost(e) {
    e.preventDefault();
    if (!photo) return;

    const randomId = Date.now();
    const newPhotoURL = { id: randomId, imageURL: photo[0] };
    const newPhotoURLs = [...photoURLs, newPhotoURL];
    console.log(newPhotoURLs);
    setPhotoURLs(newPhotoURLs);
    setPhoto('');
  }
  return (
    <>
      <section className='section-center'>
        <form className='status-feed' onSubmit={handlePost}>
          <input
            type='text'
            accept='text/*'
            placeholder="What's in your mind?"
          />
          <input
            type='file'
            multiple
            accept='image/*'
            id='myFile'
            name='filename'
            onChange={(e) => setPhoto(e.target.files)}
          />
          <button className='btn' type='submit'>
            post
          </button>
        </form>
      </section>
    </>
  );
}

export default Status;
