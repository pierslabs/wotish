/* eslint-disable react-refresh/only-export-components */
import { memo, useContext } from 'react';
import Layout from '../Layout/Layout';
import { ClockerContext } from '../context/ClockerContext';
import { AiFillStar, AiOutlineFieldTime } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { BsCalendar3 } from 'react-icons/bs';
import { MdSentimentSatisfiedAlt } from 'react-icons/md';

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
              <div className='flex justify-between align-middle'>
                <h2 className='text-2xl font-bold mb-4'>Fichar</h2>
                <AiOutlineFieldTime size={30} color={'#07c3d8'} />
              </div>
              <p className='text-gray-700'>
                Registra tus horas de trabajo con un simple clic. Mantén un
                registro preciso y organizado de tus horarios laborales.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className='flex justify-between align-middle'>
                <h2 className='text-2xl font-bold mb-4'>Modificar Usuario</h2>
                <FiUsers size={25} color={'#2e10da'} />
              </div>
              <p className='text-gray-700'>
                Actualiza tu perfil de usuario, incluyendo tu información
                personal, datos de contacto y preferencias de notificación.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className='flex justify-between align-middle'>
                <h2 className='text-2xl font-bold mb-4'>
                  Ver Turnos de Trabajo
                </h2>
                <BsCalendar3 size={25} color={'#8c10da'} />
              </div>
              <p className='text-gray-700'>
                Consulta tus turnos de trabajo programados y las horas
                registradas. Mantente informado sobre tus horarios laborales.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className='flex justify-between align-middle'>
                <h2 className='text-2xl font-bold mb-4'>
                  Compartir Satisfacción con tu Trabajo
                </h2>
                <MdSentimentSatisfiedAlt size={28} color={'#15db26'} />
              </div>
              <p className='text-gray-700'>
                Comparte tu satisfacción y logros en el trabajo con tus
                compañeros. En nuestra empresa, valoramos tu salud emocional y
                física, y nos importa tu bienestar general.
              </p>
            </div>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className='flex justify-between align-middle'>
                <h2 className='text-2xl font-bold mb-4'>
                  Valora a tus Compañeros
                </h2>
                <AiFillStar size={28} color={'#f8d50b'} />
              </div>
              <p className='text-gray-700'>
                Valora a tus compañeros de trabajo utilizando un rango de
                estrellas. Reconoce y aprecia su desempeño y contribuciones en
                el equipo. Juntos construimos un ambiente laboral positivo y
                motivador.
              </p>
            </div>
          </div>
        </main>
      </div>{' '}
    </Layout>
  );
};

export default memo(Home);
