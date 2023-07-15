import { useContext } from 'react';
import { GoSidebarCollapse } from 'react-icons/go';
import { ClockerContext } from '../context/ClockerContext';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Navbar = () => {
  const { handleSideBarOpen, user } = useContext(ClockerContext);

  return (
    <nav className='bg-blue-600 w-full p-2 px-5 h-[calc(60px)]'>
      <div className=' flex justify-between align-middle'>
        <button
          onClick={() => handleSideBarOpen(true)}
          className='rounded-lg  left-5 text-white focus:outline-none hover:text-green-300 transition-transform  duration-300 hover:transform hover:scale-110'
        >
          <GoSidebarCollapse size={30} />
        </button>
        {user.user_metadata.picture ? (
          <img
            className='w-10 h-10 rounded-full border border-white'
            src={user.user_metadata.avatar_url}
            alt='Rounded avatar'
          />
        ) : (
          <HiOutlineUserCircle size={25} color='white' />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
