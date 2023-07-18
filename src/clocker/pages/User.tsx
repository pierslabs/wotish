import { useContext, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';

import 'react-toastify/dist/ReactToastify.css';
import UserForm from '../components/userForm/UserForm';
import DNIForm from '../components/dniForm/DNIForm';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { getUserClockers } from '../../db/supabase';
import { Clocker } from '../components/fingerPrint/fingerPrint.types';
import ClockerCard from '../components/clockerCard/ClockerCard';
import { FiUser } from 'react-icons/fi';
import { LiaCommentsSolid } from 'react-icons/lia';
import { FaClockRotateLeft } from 'react-icons/fa6';
import ProfileComponent from '../components/profile/ProfileComponent';
import CommentsList from '../components/Comment/CommentsList';

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

  const [clockers, setClockers] = useState<Clocker[]>([]);

  useEffect(() => {
    handleNavbarColor(NavbarColor.USER);
  }, [handleNavbarColor]);

  useEffect(() => {
    if (profile) {
      getUserClockers(profile?.id_profile)
        .then((data) => data && setClockers(data.data!))
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Layout>
      {!profile?.dni && <DNIForm />}
      <div className='flex justify-around items-baseline p-3'>
        <div
          className='flex gap-2 items-baseline cursor-pointer transition-all duration-100 '
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
          className='flex gap-2 items-baseline cursor-pointer transition-all duration-100 '
          onClick={() =>
            setShowTabSelected({ user: false, comments: true, clockers: false })
          }
        >
          <LiaCommentsSolid
            color={showTabSelected.comments ? 'text-blue-600' : 'text-gray-700'}
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
          className='flex gap-2 items-baseline cursor-pointer'
          onClick={() =>
            setShowTabSelected({ user: false, comments: false, clockers: true })
          }
        >
          <FaClockRotateLeft
            color={showTabSelected.clockers ? 'text-blue-600' : 'text-gray-700'}
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
      <UserForm />

      <div className='  mx-auto lg:w-2/3'>
        <ProfileComponent
          user={user}
          showTabSelected={showTabSelected}
          handleModalOpen={handleModalOpen}
          profile={profile}
        />
        {/* Comentarios */}

        <CommentsList showTabSelected={showTabSelected} />

        {/* Tabla de fichajes */}
        <section
          className={`${
            showTabSelected.clockers ? '' : 'hidden'
          } transition duration-1000`}
        >
          <h1 className='text-xl mr-auto mt-6 p-3'>Tus Registros</h1>
          <hr />
          {clockers.map((clocker) => (
            <ClockerCard entry={clocker.entry} exit={clocker.exit} />
          ))}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'></div>
        </section>
      </div>
    </Layout>
  );
};

export default User;
