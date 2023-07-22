import { useContext, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';

import 'react-toastify/dist/ReactToastify.css';
import UserForm from '../components/userForm/UserForm';
import DNIForm from '../components/dniForm/DNIForm';
import { NavbarColor } from '../components/Navbar/navbar.enum';

import { FiUser } from 'react-icons/fi';
import { LiaCommentsSolid } from 'react-icons/lia';
import { FaClockRotateLeft } from 'react-icons/fa6';
import ProfileComponent from '../components/profile/ProfileComponent';
import CommentsList from '../components/Comment/CommentsList';
import ClockerTable from '../components/clockerTable/ClockerTable';

// TODO: Refactor this interface to a global one
export interface ShowSelected {
  user: boolean;
  comments: boolean;
  clockers: boolean;
}

const User = () => {
  const { user, handleModalOpen, profile } = useContext(ClockerContext);
  const [showTabSelected, setShowTabSelected] = useState<ShowSelected>({
    user: true,
    comments: false,
    clockers: false,
  });

  const { handleNavbarColor } = useContext(ClockerContext);

  useEffect(() => {
    handleNavbarColor(NavbarColor.USER);
  }, [handleNavbarColor]);

  return (
    <Layout>
      {!profile?.dni && <DNIForm />}
      <div className='flex justify-around items-baseline p-3'>
        <div
          className='flex gap-1 items-baseline cursor-pointer transition-all duration-100 '
          onClick={() =>
            setShowTabSelected({ user: true, comments: false, clockers: false })
          }
        >
          <FiUser color={showTabSelected.user ? '#000' : 'text-gray-700'} />
          <p
            className={`${
              showTabSelected.user ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            Perfil
          </p>
        </div>
        <div
          className='flex gap-1 items-center cursor-pointer transition-all duration-100 '
          onClick={() =>
            setShowTabSelected({ user: false, comments: true, clockers: false })
          }
        >
          <LiaCommentsSolid
            color={showTabSelected.comments ? 'text-blue-600' : 'text-gray-700'}
            size={16}
          />
          <p
            className={`${
              showTabSelected.comments ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            Comentarios
          </p>
        </div>
        <div
          className='flex gap-1 items-center cursor-pointer'
          onClick={() =>
            setShowTabSelected({ user: false, comments: false, clockers: true })
          }
        >
          <FaClockRotateLeft
            color={showTabSelected.clockers ? 'text-blue-600' : 'text-gray-700'}
            size={14}
          />
          <p
            className={`${
              showTabSelected.clockers ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            Registros
          </p>
        </div>
      </div>

      {/* UseForm Component */}
      <UserForm />

      {/* ProfileComponet */}
      <div className='  mx-auto lg:w-2/3'>
        <ProfileComponent
          user={user}
          showTabSelected={showTabSelected}
          handleModalOpen={handleModalOpen}
          profile={profile}
        />

        {/* ComMentList */}
        <CommentsList showTabSelected={showTabSelected} />

        {/* Tabla de fichajes */}
        <ClockerTable
          showTabSelected={showTabSelected}
          user={user}
          profile={profile}
        />
      </div>
    </Layout>
  );
};

export default User;
