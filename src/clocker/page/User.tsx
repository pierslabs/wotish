import { useContext, useState } from 'react';
import Layout from '../Layout/Layout';
import { ClockerContext } from '../context/ClockerContext';
import { BsSearch } from 'react-icons/bs';

const User = () => {
  const { user } = useContext(ClockerContext);
  const [dni, setDni] = useState('');
  const [step, setStep] = useState(0);

  return (
    <Layout>
      {!dni && !step && (
        <div className='bg-blue-100 border-blue-500 text-blue-700 border-l-4 p-4 mt-4 absolute top-1/3 left-2 right-2 text-center z-10'>
          <p className='font-semibold'>
            Necesitamos tu DNI para el fichaje laboral.
          </p>
          <p className='text-sm'>
            El DNI es requerido por ley para llevar un registro preciso de los
            empleados y cumplir con las normativas laborales.
          </p>
          <button
            className='bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4'
            onClick={() => setStep(1)}
          >
            Continuar
          </button>
        </div>
      )}
      <div
        className={`bg-white rounded-lg shadow-md p-4 sm:w-1/3 mx-auto m-20 ${
          !step ? 'blur' : ''
        }`}
      >
        <img
          className='w-full h-40 object-fit rounded-md'
          src={user.user_metadata.picture}
          alt={user.user_metadata.full_name}
        />

        <div>
          <h2 className='text-xl font-bold'>{user.user_metadata.full_name}</h2>

          {step === 1 && (
            <div className='relative'>
              <input
                className='border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:border-blue-500'
                type='text'
                placeholder='Introduce un DNI'
                name='dni'
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
              <div className='absolute top-5 left-3 transform -translate-y-1/2'>
                <BsSearch className='text-gray-400' />
              </div>
              <button
                className='bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4'
                onClick={() => setStep(2)}
              >
                Continuar
              </button>
            </div>
          )}

          {step === 2 && <p className='text-gray-500'>{dni}</p>}
          <p className='text-gray-500'>{user.email}</p>
          <p className='text-gray-500'>{user.phone}</p>
          <p className='text-gray-500'>{user.id}</p>
        </div>
      </div>
    </Layout>
  );
};

export default User;
