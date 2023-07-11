import { ToastContainer } from 'react-toastify';
import { HiOutlineIdentification } from 'react-icons/hi';
import Button from '../common/Button';
import useUserForm from '../../../hooks/useUserForm';
import Loader from '../common/Loader';

const DNIForm = () => {
  const { onSubmit, register, userProfile, handleSubmit, dniRegex, loading } =
    useUserForm();

  return (
    <>
      {loading && <Loader />}
      <ToastContainer theme='dark' position='top-center' />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-80'
      >
        <div className='bg-blue-100 border-blue-500 text-blue-700 border-l-4 p-4 mt-4 top-1/3 left-2 right-2 text-center z-10  sm:right-64 sm:left-64 lg:w-2/5'>
          <p className='font-semibold'>
            Necesitamos tu DNI para el fichaje laboral.
          </p>
          <p className='text-sm'>
            El DNI es requerido por ley para llevar un registro preciso de los
            empleados y cumplir con las normativas laborales.
          </p>

          <div className='flex justify-center  mt-4 '>
            <span className='text-gray-400 bg-white p-2'>
              <HiOutlineIdentification size={25} />
            </span>
            <input
              type='text'
              placeholder='Introduce tu DNI, por favor'
              className='py-1 pr-4  border-gray-300  outline-none text-gray-700'
              {...register('dni', {
                required: true,
                pattern: {
                  value: dniRegex,
                  message: 'DNI no válido',
                },
              })}
              defaultValue={userProfile?.dni}
            />
          </div>
          <Button value='Guardar' />
        </div>
      </form>
    </>
  );
};

export default DNIForm;
