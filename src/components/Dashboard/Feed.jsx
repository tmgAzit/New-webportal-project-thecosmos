// import feed1 from '../../images/F1.jpeg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import React, {useState, useEffect } from "react";
import axios from 'axios';
import Comments from './comments';

function Feed() {
  const[product, setProduct] = useState([]);

  useEffect( ()=>{
    const getProduct= ()=>{
        fetch("http://localhost/guardian_web_portal/posts.php")
        .then(res=>{ return res.json()})
        .then(data=>{ setProduct(data)})
        .catch(error=>{ console.log(error)});
    }
    getProduct();
  },[]);


  return (
    <>
    
     <h3 className='feed-title' >Feeds</h3>
      <section className='section-center'>
      {Object.values(product).map((pdata)=>(
        <div className='feeds'>
          
          <div className='user-post'>
            {/* <p>{pdata.id }</p> */}
            <p>{pdata.ptitle }</p>
            <p>{pdata.pcontent }</p>
            <div className='post-img'>
            <img src={`http://localhost/guardian_web_portal/images/${pdata.pimage}`} alt='image name' />
            </div>
          </div>

          <div>
           <Comments post_id={pdata.id} />
          </div>
          
        </div>
      ))}
      </section>
    </>
);
}

export default Feed;
