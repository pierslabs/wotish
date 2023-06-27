import { useContext } from 'react';
import { GoSidebarCollapse } from 'react-icons/go';
import { ClockerContext } from '../context/ClockerContext';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Navbar = () => {
  const { handleSideBarOpen } = useContext(ClockerContext);

  return (
    <nav className='bg-blue-600 w-full p-2 px-5'>
      <div className=' flex justify-between align-middle'>
        <button
          onClick={() => handleSideBarOpen(true)}
          className='rounded-lg  left-5 hover:text-blue-600 transition-colors'
        >
          <GoSidebarCollapse size={30} color='white' />
          <span className='sr-only'>Open menu</span>
        </button>

        <HiOutlineUserCircle size={30} color='white' />
      </div>
    </nav>
  );
};

export default Navbar;
