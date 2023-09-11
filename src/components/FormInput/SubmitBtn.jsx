import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <button className='btn loginBtn' type='submit' disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          logging....
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
};

export default SubmitBtn;
