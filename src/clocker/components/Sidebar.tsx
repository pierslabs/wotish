import { useContext } from 'react';
import { ClockerContext } from '../context/ClockerContext';

const Sidebar = () => {
  const { handleSideBarOpen, isSidebarOpen } = useContext(ClockerContext);
  console.log(isSidebarOpen);
  return (
    <div className='flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light'>
      {/* Loading screen */}
      {/* <div className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-blue-600">
        Loading.....
      </div> */}

      {/* Sidebar */}
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

        {/* Sidebar content */}
        <div className='z-10 flex flex-col flex-1'>
          <div className='flex items-center justify-between flex-shrink-0 w-64 p-4'>
            {/* Logo */}
            <a href='#'>
              <span className='sr-only'>Wotish</span>
              <h1 className='text-3xl text-blue-600'>Wotish</h1>
            </a>

            {/* Close btn */}
            <button
              onClick={() => handleSideBarOpen(false)}
              className='p-1 rounded-lg focus:outline-none focus:ring'
            >
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
              <span className='sr-only'>Close sidebar</span>
            </button>
          </div>

          <nav className='flex flex-col flex-1 w-64 p-4 mt-4'>
            <a href='#' className='flex items-center space-x-2'>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              <span>Home</span>
            </a>
          </nav>

          <div className='flex-shrink-0 p-4'>
            <button className='flex items-center space-x-2'>
              <svg
                aria-hidden='true'
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                />
              </svg>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
