import { useContext, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ClockerContext } from '../../context/ClockerContext';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { NavbarColor } from './navbar.enum';

import NotificationBadge from '../NotificationBadge/NotificationBadge';
const Navbar = () => {
  const { handleSideBarOpen, user } = useContext(ClockerContext);

  const { handleNavbarColor, navbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.DEFAULT);
  }, [handleNavbarColor]);

  return (
    <nav
      className={`w-full p-2 px-5  h-[calc(50px)] `}
      style={{ backgroundColor: navbarColor }}
    >
      <div className=' flex justify-between align-middle'>
        <button
          onClick={() => handleSideBarOpen(true)}
          className='rounded-lg  left-5 text-white focus:outline-none hover:text-green-300 transition-transform  duration-300 hover:transform hover:scale-110'
        >
          <GiHamburgerMenu size={30} />
        </button>

        <div className='flex gap-5 justify-center items-center'>
          <NotificationBadge />
          {user.user_metadata.picture ? (
            <img
              className='w-8 h-8 rounded-full p-0.5 bg-white bg-opacity-50'
              src={user.user_metadata.avatar_url}
              alt='Rounded avatar'
            />
          ) : (
            <HiOutlineUserCircle size={25} color='white' />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
