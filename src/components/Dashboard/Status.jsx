import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Status() {
  const navigate = useNavigate();
  const [ptitle, setPtitle] = useState('');
  const [pcontent, setPcontent] = useState('');
  const [pfile, setPfile] = useState('');
  const [message, setMessage] = useState('');

  const uploadPost = async () => {
    const formData = new FormData();
    formData.append('ptitle', ptitle);
    formData.append('pcontent', pcontent);
    formData.append('pfile', pfile);

    try {
      const response = await axios.post('http://localhost/guardian_web_portal/posts.php', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        setMessage(response.data.success);
        setTimeout(() => {
          navigate('/Feed.jsx');
        }, 2000);
      }
    } catch (error) {
      console.error('Error uploading post:', error);
    }
  }

  const handleSubmit = async (e) => {
    setMessage("Post Inserted Successfully!!");
    e.preventDefault();
    await uploadPost();
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  return (
    <section className='section-center' onSubmit={handleSubmit}>
      <form className='status-feed'>
        <p className="text-warning">{message}</p>
        <input
          type='text'
          accept='text/*'
          placeholder="What should the blog post be titled?"
          required
          onChange={(e) => setPtitle(e.target.value)}
        />
        <input
          type='text'
          accept='text/*'
          placeholder="What's in your mind? (Content)"
          required
          onChange={(e) => setPcontent(e.target.value)}
        />
        <input
          type='file'
          id='myFile'
          name='filename'
          required
          onChange={(e) => setPfile(e.target.files[0])}
        />
        <button type="submit" className="btn btn-success">Post</button>
      </form>
    </section>
  );
}

export default Status;
