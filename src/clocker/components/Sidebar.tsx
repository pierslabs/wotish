import { useContext } from 'react';
import { ClockerContext } from '../context/ClockerContext';
import { supabaseLogOut } from '../../db/supabase';
import { Link, NavLink } from 'react-router-dom';
import { GrHomeRounded } from 'react-icons/gr';
import { AiOutlineLogout } from 'react-icons/ai';
import { GoEyeClosed } from 'react-icons/go';
import CardsData from '../data/cardData';
const Sidebar = () => {
  const { handleSideBarOpen, isSidebarOpen } = useContext(ClockerContext);

  return (
    <div className='flex h-screen absolute antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light z-20'>
      <div
        className={`fixed inset-y-0 z-10 flex w-80 transition-all duration-500 ${
          isSidebarOpen ? '' : '-translate-x-full '
        }`}
      >
        {/* Curvy shape */}
        <svg
          className='absolute inset-0 w-full h-full text-white'
          style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
          preserveAspectRatio='none'
          viewBox='0 0 309 800'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z' />
        </svg>

        <div className='z-10 flex flex-col flex-1'>
          <div className='flex items-center justify-between flex-shrink-0 w-64 p-4'>
            <Link to='/clocker'>
              <span className='sr-only'>Wotish</span>
              <h1 className='text-3xl text-blue-600'>Wotish</h1>
            </Link>
            <button
              onClick={() => handleSideBarOpen(false)}
              className='p-1 rounded-lg focus:outline-none focus:ring '
            >
              <GoEyeClosed size={25} />
            </button>
          </div>

          <nav className='flex gap-3 flex-col flex-1 w-64 p-4 mt-4'>
            <div className='flex gap-4 m-2  hover:text-cyan-500  duration-200'>
              <NavLink
                to='/clocker'
                className={({ isActive }) => (isActive ? 'text-cyan-500' : '')}
              >
                <div className='flex  gap-3 justify-start'>
                  <div className='w-8'>
                    <GrHomeRounded size={23} />
                  </div>
                  <p className='mt-1'> HOME</p>
                </div>
              </NavLink>
            </div>
            <hr />
            {CardsData.map(({ key, icon, path }) => (
              <div
                key={key}
                className='flex  m-2 hover:text-cyan-500 duration-200'
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => {
                    return isActive ? 'text-cyan-500' : '';
                  }}
                >
                  <div className='flex  gap-3 justify-start'>
                    <div className='w-8'>{icon}</div>
                    <p className='mt-1'> {key?.toUpperCase()}</p>
                  </div>
                </NavLink>
              </div>
            ))}
          </nav>

          <div className='flex justify-evenly  p-4 '>
            <button
              className='flex items-center space-x-2 hover:text-blue-600 duration-200'
              onClick={supabaseLogOut}
            >
              <span className='mr-1'> LogOut</span>
              <AiOutlineLogout size={35} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
