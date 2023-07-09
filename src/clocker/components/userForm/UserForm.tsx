import { GrClose } from 'react-icons/gr';

import useUserForm from './useUserForm';
import { useContext } from 'react';
import { ClockerContext } from '../../context/ClockerContext';
import Button from '../common/Button';
import { ToastContainer } from 'react-toastify';
import Loader from '../common/Loader';

const UserForm = () => {
  const { isModalOpen, handleModalOpen } = useContext(ClockerContext);
  const { register, handleSubmit, errors, onSubmit, userProfile, loading } =
    useUserForm();
  const dniRegex = /^\d{8}[A-HJ-NP-TV-Z]$/;
  console.log(errors);
  return (
    <>
      <ToastContainer />
      {loading && <Loader />}
      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50   bg-gray-700 bg-opacity-80`}
        >
          <div className='bg-white rounded-lg p-8 sm:w-1/2 m-2 max-w-md '>
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
                type='text'
                className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
                {...register('full_name', {
                  required: {
                    value: true,
                    message: 'Nombre requerido',
                  },
                  pattern: {
                    value: /^[a-zA-Z ]{1,50}$/,
                    message: 'Nombre no válido',
                  },
                })}
                defaultValue={userProfile?.full_name}
              />
              {errors.full_name && (
                <span className='text-red-500'>
                  {String(errors.full_name.message)}
                </span>
              )}

              <input
                type='text'
                className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: 'Email no válido',
                  },
                })}
                defaultValue={userProfile?.email}
              />
              {errors.email && (
                <span className='text-red-500'>
                  {String(errors.email.message)}
                </span>
              )}

              <input
                type='text'
                className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
                {...register('dni', {
                  required: true,
                  pattern: {
                    value: dniRegex,
                    message: 'DNI no válido',
                  },
                })}
                defaultValue={userProfile?.dni}
              />
              {errors.dni && (
                <span className='text-red-500'>
                  {String(errors.dni.message)}
                </span>
              )}

              <Button value='Guardar' />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UserForm;
