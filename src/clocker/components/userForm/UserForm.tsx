import { GrClose } from 'react-icons/gr';

import useUserForm from './useUserForm';
import { useContext } from 'react';
import { ClockerContext } from '../../context/ClockerContext';

const UserForm = () => {
  const { isModalOpen, handleModalOpen } = useContext(ClockerContext);
  const { register, handleSubmit, errors, onSubmit, userProfile } =
    useUserForm();

  return (
    <>
      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 border-2  bg-gray-700 bg-opacity-80`}
        >
          <div className='bg-white rounded-lg p-8 sm:w-1/2 m-2 max-w-md'>
            {/* <!-- Contenido del modal aquí --> */}
            <div className='flex justify-between items-center'>
              <h2 className='text-2xl font-bold mb-4'>Modifica tu usuario</h2>
              <button onClick={() => handleModalOpen(false)}>
                <GrClose />
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-2 mt-4'
            >
              <input
                id='full_name'
                type='text'
                className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
                {...register('full_name')}
                defaultValue={userProfile?.full_name}
              />
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type='text'
                className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
                {...register('email')}
                defaultValue={userProfile?.email}
              />
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type='text'
                className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
                {...register('dni')}
                defaultValue={userProfile?.dni}
              />
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserForm;
