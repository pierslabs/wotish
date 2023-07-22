import { FC } from 'react';
import { ShowSelected } from '../../pages/User';
import { Profile, User } from '../../context/context.interface';
import Button from '../common/Button';

export interface ProfileProps {
  user: User;
  showTabSelected: ShowSelected;
  handleModalOpen: (value: boolean) => void;
  profile: Profile | undefined;
}
const ProfileComponent: FC<ProfileProps> = ({
  user,
  showTabSelected,
  handleModalOpen,
  profile,
}) => {
  return (
    <section
      className={`${
        showTabSelected.user ? 'opacity-100 visible' : 'opacity-0 hidden'
      } transition duration-1000`}
    >
      <h1 className='text-2xl mr-auto mt-4 p-3'>Tu Perfil</h1>
      <hr />
      <div className='flex flex-col w-full  justify-evenly items-center sm:flex-row mt-7 '>
        <div className='bg-blue-300  rounded-lg p-4 shadow hidden sm:block justify-center '>
          <img
            className='w-full h-40 object-fit rounded-full'
            src={user?.user_metadata.picture}
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
            <div className='bg-white p-2 flex gap-3'>
              <label>Dni:</label>
              <p className='text-gray-500'>{profile?.dni}</p>
            </div>
          )}
          <div className='bg-white p-2 flex gap-3'>
            <label htmlFor=''>Email:</label>
            <p className='text-gray-500'>{profile?.email}</p>
          </div>
          <div className='bg-white p-2 flex gap-3'>
            <label htmlFor=''>Phone:</label>
            <div className='text-gray-500'>
              {profile?.phone ? (
                profile?.phone
              ) : (
                <p className='text-red-500'>
                  Aún no has añadido ningun teléfono
                </p>
              )}
            </div>
          </div>
          <div className='bg-white p-2 flex gap-3'>
            <label htmlFor=''>Id:</label>
            <p className='text-gray-500'>{profile?.id}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComponent;
