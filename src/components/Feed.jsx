import feed1 from '../images/F1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
function Feed() {
  return (
    <>
      <section className='section-center'>
        <div className='feeds'>
          <h3 className='feed-title'>Feeds</h3>
          <div className='user-post'>
            <div className='user-details'>
              <div className='profile-photo'>
                <img src={feed1} alt='profile photo' />
              </div>
              <a href='#' className='username'>
                ajit ghising
              </a>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='post-img'>
              <img src={feed1} alt='image name' />
            </div>
          </div>
          <div className='feed-Icons'>
            <div>
              <FontAwesomeIcon icon={faHeart} />
              <button className='btn'>Like</button>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <button className='btn'>Comment</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feed;
