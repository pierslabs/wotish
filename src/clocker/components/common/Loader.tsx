import { ClockLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
      <ClockLoader color='#36d7b7' />
    </div>
  );
};

export default Loader;
