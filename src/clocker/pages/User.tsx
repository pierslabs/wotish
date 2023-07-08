import { useContext, useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import { ClockerContext } from '../context/ClockerContext';
import { BsSearch } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserForm from '../components/userForm/UserForm';
const User = () => {
  //refactor form card dni

  const { user, handleModalOpen } = useContext(ClockerContext);
  const [dni, setDni] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormVisible(true);
    user.dni = dni;
    toast.success('Tu DNI se ha guardado correctamente!');
    setFormVisible(false);
  };

  useEffect(() => {
    if (!user.dni) {
      setFormVisible(true);
      return;
    }
    setDni(user.dni);
  }, [user.dni]);

  return (
    <Layout>
      <ToastContainer theme='dark' position='top-center' />
      {formVisible && (
        <form onSubmit={onSubmit}>
          <div className='bg-blue-100 border-blue-500 text-blue-700 border-l-4 p-4 mt-4 absolute top-1/3 left-2 right-2   text-center z-10 lg:w-2/3 sm:right-64 sm:left-64'>
            <p className='font-semibold'>
              Necesitamos tu DNI para el fichaje laboral.
            </p>
            <p className='text-sm'>
              El DNI es requerido por ley para llevar un registro preciso de los
              empleados y cumplir con las normativas laborales.
            </p>

            <div className='relative sm:w-1/5 mx-auto mt-4'>
              <input
                type='text'
                placeholder='Introduce tu DNI'
                className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
              <span className='absolute left-3 top-3 text-gray-400'>
                <BsSearch />
              </span>
            </div>
            <button
              type='submit'
              className='bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4'
            >
              Continuar
            </button>
          </div>
        </form>
      )}

      <UserForm />
      <div
        className={`bg-white rounded-lg shadow-md p-4 sm:w-1/3 mx-auto m-20 ${
          !user.dni ? 'blur' : ''
        }`}
      >
        <img
          className='w-full h-40 object-fit rounded-md'
          src={user.user_metadata.picture}
          alt={user.user_metadata.full_name}
        />

        <div className='mt-4'>
          <h2 className='text-xl font-bold'>{user.user_metadata.full_name}</h2>

          {user.dni && <p className='text-gray-500'>{dni}</p>}
          <p className='text-gray-500'>{user.email}</p>
          <p className='text-gray-500'>{user.phone}</p>
          <p className='text-gray-500'>{user.id}</p>
        </div>
        <div className='w-100'>
          <button
            className='bg-blue-500 text-white font-semibold px-4 py-2 rounded mt-4'
            onClick={() => handleModalOpen(true)}
          >
            Editar
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default User;
