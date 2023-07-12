import { useContext } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';

import 'react-toastify/dist/ReactToastify.css';
import UserForm from '../components/userForm/UserForm';
import Button from '../components/common/Button';
import DNIForm from '../components/dniForm/DNIForm';

const User = () => {
  const { user, handleModalOpen, profile } = useContext(ClockerContext);

  return (
    <Layout>
      {!profile?.dni && <DNIForm />}

      <UserForm />

      <div className='  mx-auto lg:w-2/3'>
        <div className='p-4'>
          <div className='w-100 flex justify-end m-4'>
            <Button value='Editar' onClick={() => handleModalOpen(true)} />
          </div>
          {/* Avatar */}
          <div className='flex flex-col w-full  justify-evenly items-center sm:flex-row mt-7 '>
            <div className='bg-blue-300  rounded-lg p-4 shadow hidden sm:block justify-center '>
              <img
                className='w-full h-40 object-fit rounded-full'
                src={user.user_metadata.picture}
                alt={profile?.full_name}
              />
            </div>

            {/* Datos del usuario */}
            <div className='bg-green-100 flex flex-col gap-2 rounded-lg p-4 shadow mt-4 sm:w-2/4'>
              <h2 className='text-xl font-bold'>{profile?.full_name}</h2>
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

          {/* Comentarios */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
            <div className='bg-blue-300 rounded-lg p-4 shadow'>
              {/* Aquí puedes agregar el código para mostrar los comentarios azules */}
            </div>
            <div className='bg-green-300 rounded-lg p-4 shadow'>
              {/* Aquí puedes agregar el código para mostrar los comentarios verdes */}
            </div>
            <div className='bg-yellow-300 rounded-lg p-4 shadow'>
              {/* Aquí puedes agregar el código para mostrar los comentarios amarillos */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
