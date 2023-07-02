import { useContext } from 'react';
import Layout from '../Layout/Layout';
import { ClockerContext } from '../context/ClockerContext';

const Home = () => {
  const { user } = useContext(ClockerContext);
  return (
    <Layout>
      <div className='bg-gray-100 min-h-screen'>
        <header className='bg-green-500 py-4 m-4'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-xl font-bold text-white'>
              ¡Bienvenido(a) {user.user_metadata.full_name}!
            </h1>
          </div>
        </header>
        <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>Fichar</h2>
              <p className='text-gray-700'>
                Registra tus horas de trabajo con un simple clic. Mantén un
                registro preciso y organizado de tus horarios laborales.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>Modificar Usuario</h2>
              <p className='text-gray-700'>
                Actualiza tu perfil de usuario, incluyendo tu información
                personal, datos de contacto y preferencias de notificación.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h2 className='text-2xl font-bold mb-4'>Ver Turnos de Trabajo</h2>
              <p className='text-gray-700'>
                Consulta tus turnos de trabajo programados y las horas
                registradas. Mantente informado sobre tus horarios laborales.
              </p>
            </div>
          </div>
        </main>
      </div>{' '}
    </Layout>
  );
};

export default Home;
