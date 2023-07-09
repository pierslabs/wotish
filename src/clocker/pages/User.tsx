import { useContext, useState } from 'react';
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
      <div
        className={`bg-white rounded-lg shadow-md p-4 sm:w-1/3 mx-auto m-20 ${
          !profile?.dni ? 'blur' : ''
        }`}
      >
        <img
          className='w-full h-40 object-fit rounded-md'
          src={user.user_metadata.picture}
          alt={profile?.full_name}
        />

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>{profile?.full_name}</h2>

          {profile?.dni && <p className='text-gray-500'>{profile?.dni}</p>}
          <p className='text-gray-500'>{profile?.email}</p>
          <p className='text-gray-500'>{profile?.phone}</p>
          <p className='text-gray-500'>{profile?.id}</p>
        </div>
        <div className='w-100'>
          <Button value='Editar' onClick={() => handleModalOpen(true)} />
        </div>
      </div>
    </Layout>
  );
};

export default User;
