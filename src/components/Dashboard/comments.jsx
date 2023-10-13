// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Comments({ post_id}) {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');

//   // Fetch comments for the post when the component mounts
//   useEffect(() => {
//     axios.get(`http://localhost/guardian_web_portal/getcomments.php?post_id=${post_id}`)
//       .then((response) => {
//         setComments(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching comments:', error);
//       });
//   }, [post_id]);

//   // Function to handle adding a new comment
//   const addComment = () => {
//     axios.post('http://localhost/guardian_web_portal/addcomments.php', {
//       post_id,
//       content: newComment,
//     })
//     .then((response) => {
//       // Refresh the comments list after adding a new comment
//       setComments([...comments, response.data]);
//       setNewComment('');
//     })
//     .catch((error) => {
//       console.error('Error adding comment:', error);
//     });
//   };

//   return (
//     <div>
//       <h3>Comments</h3>
//       <ul>
//       {Array.isArray(comments) && comments.map((comment) => (
//           <li className="comment" key={comment.id}><strong>Name:</strong> {comment.firstName} {comment.lastName}<br />
//           <strong>Comment:</strong> {comment.content}</li>
//         ))}
//       </ul>
//       <div className="comment-form">
//         <textarea
//           className="comment-input"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//         />
//         <button className="comment-submit-btn" onClick={addComment}>
//           Submit Comment
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Comments;

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Comments({ post_id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [auth,setAuth]=useState('');
  const [user,setAuth1]=useState('');
  const [userID,setAuth2]=useState('');
  // Fetch comments for the post when the component mounts
  useEffect(() => {
    var auth = localStorage.getItem('first_name');
    var user = localStorage.getItem('last_name');
    var userID = localStorage.getItem('user_id');
    setAuth(auth);
    setAuth1(user);
    setAuth2(userID);
    axios.get(`http://localhost/guardian_web_portal/getcomments.php?post_id=${post_id}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, [post_id]);

  // Function to handle adding a new comment
  const addComment = async(e) => {
    e.preventDefault();
    axios.post('http://localhost/guardian_web_portal/addcomment.php', {
      user_id: userID,
      post_id,
      content: newComment,
    })
    .then((response) => {
      // Refresh the comments list after adding a new comment
      setComments([...comments, response.data]);
      setNewComment('');
    })
    .catch((error) => {
      console.error('Error adding comment:', error);
    });
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {Array.isArray(comments) && comments.map((comment) => (
          <li className="comment">
            <strong>Name:</strong> {comment.firstName} {comment.lastName}            
            <br />
            <strong>Comment:</strong> {comment.content}
          </li>
        ))}
      </ul>
      <div className="comment-form">
        <textarea
          className="comment-input"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="comment-submit-btn" onClick={addComment}>
          Submit Comment
        </button>
      </div>
    </div>
  );
}

export default Comments;
