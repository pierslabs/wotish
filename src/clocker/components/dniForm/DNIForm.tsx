import { ToastContainer } from 'react-toastify';
import { HiOutlineIdentification } from 'react-icons/hi';
import Button from '../common/Button';
import useUserForm from '../../../hooks/useUserForm';

const DNIForm = () => {
  const { onSubmit, register, userProfile, handleSubmit, dniRegex } =
    useUserForm();

  return (
    <>
      <ToastContainer theme='dark' position='top-center' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-blue-100 border-blue-500 text-blue-700 border-l-4 p-4 mt-4 absolute top-1/3 left-2 right-2   text-center z-10 lg:w-2/3 sm:right-64 sm:left-64'>
          <p className='font-semibold'>
            Necesitamos tu DNI para el fichaje laboral.
          </p>
          <p className='text-sm'>
            El DNI es requerido por ley para llevar un registro preciso de los
            empleados y cumplir con las normativas laborales.
          </p>

          <div className='relative sm:w-1/5 mt-4  '>
            <input
              type='text'
              placeholder='Introduce tu dni porfavor'
              className='pl-10 pr-4 py-2 border border-gray-300 rounded-md outline-none w-full text-gray-700'
              {...register('dni', {
                required: true,
                pattern: {
                  value: dniRegex,
                  message: 'DNI no válido',
                },
              })}
              defaultValue={userProfile?.dni}
            />
            <span className='absolute left-3 top-2 text-gray-400'>
              <HiOutlineIdentification size={25} />
            </span>
          </div>
          <Button value='Guardar' />
        </div>
      </form>
    </>
  );
};

export default DNIForm;
