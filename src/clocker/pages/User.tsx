import { useContext, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';

import 'react-toastify/dist/ReactToastify.css';
import UserForm from '../components/userForm/UserForm';
import Button from '../components/common/Button';
import DNIForm from '../components/dniForm/DNIForm';
import CommentItem from '../components/common/CommentItem';
import { CommentData, fakeCommentData } from '../data/fakeComments';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { getUserClockers } from '../../db/supabase';
import { Clocker } from '../components/fingerPrint/fingerPrint.types';
import ClockerCard from '../components/clockerCard/ClockerCard';
import { FiUser } from 'react-icons/fi';
import { LiaCommentsSolid } from 'react-icons/lia';
import { FaClockRotateLeft } from 'react-icons/fa6';

const User = () => {
  const { user, handleModalOpen, profile } = useContext(ClockerContext);
  const [showTabSelected, setShowTabSelected] = useState({
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
        <section
          className={`${
            showTabSelected.user ? 'opacity-100 visible' : 'opacity-0 hidden'
          } transition duration-1000`}
        >
          <h1 className='text-xl mr-auto mt-4 p-3'>Tu Perfil</h1>
          <hr />
          <div className='flex flex-col w-full  justify-evenly items-center sm:flex-row mt-7 '>
            <div className='bg-blue-300  rounded-lg p-4 shadow hidden sm:block justify-center '>
              <img
                className='w-full h-40 object-fit rounded-full'
                src={user.user_metadata.picture}
                alt={profile?.full_name}
              />
            </div>

            <div className='bg-green-100 flex flex-col gap-2 rounded-lg p-4 shadow mt-4 sm:w-2/4'>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>{profile?.full_name}</p>
                <Button value='Editar' onClick={() => handleModalOpen(true)} />
              </div>

              <hr />
              {profile?.dni && (
                <div className='bg-white p-2 flex gap-1'>
                  <label>Dni:</label>
                  <p className='text-gray-500'>{profile?.dni}</p>
                </div>
              )}
              <div className='bg-white p-2 flex gap-1'>
                <label htmlFor=''>Email:</label>
                <p className='text-gray-500'>{profile?.email}</p>
              </div>
              <div className='bg-white p-2 flex gap-1'>
                <label htmlFor=''>Phone</label>
                <p className='text-gray-500'>
                  {profile?.phone ? (
                    profile?.phone
                  ) : (
                    <p className='text-red-500'>
                      Aún no has añadido ningun teléfono
                    </p>
                  )}
                </p>
              </div>
              <div className='bg-white p-2 flex gap-1'>
                <label htmlFor=''>Id:</label>
                <p className='text-gray-500'>{profile?.id}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comentarios */}

        <section
          className={`${
            showTabSelected.comments ? 'opacity-100' : 'opacity-0 hidden'
          } transition duration-1000`}
        >
          <h1 className='text-xl mr-auto mt-6 p-3'>
            Comentarios de tus compañeros
          </h1>
          <hr />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
            {fakeCommentData.map((comment: CommentData) => (
              <CommentItem
                key={comment.id}
                stars={comment.stars}
                comment={comment.comment}
                user={comment.name}
                created_at={comment.created_at}
              />
            ))}
          </div>
        </section>

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
