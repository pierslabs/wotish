/* eslint-disable react-hooks/exhaustive-deps */
import { IoFingerPrintOutline } from 'react-icons/io5';
import { Profile } from '../../context/context.interface';
import useFingerPrint from './useFingerPrint';

import { FC, useEffect } from 'react';

export interface FingerPrintProps {
  profile: Profile | undefined;
}

const FingerPrint: FC<FingerPrintProps> = ({ profile }) => {
  const {
    handleWorkExit,
    handleWorkSign,
    getLastClocker,
    clocker,
    hoursWorked,
    loading,
  } = useFingerPrint();

  useEffect(() => {
    if (profile) getLastClocker(profile);
  }, [profile, clocker?.active]);

  // Obtener la cantidad de horas trabajadas y agregar un cero delante si es necesario
  const formattedHoursWorked = String(hoursWorked?.hours()).padStart(2, '0');
  const formattedMinutesWorked = String(hoursWorked?.minutes()).padStart(
    2,
    '0'
  );
  const formattedSecondsWorked = String(hoursWorked?.seconds()).padStart(
    2,
    '0'
  );

  const hours = `${formattedHoursWorked}:${formattedMinutesWorked}:${formattedSecondsWorked}`;

  return (
    <div>
      {loading ? (
        <div className='flex justify-center  py-3 mt-2 bg-white'>
          <p className='text-green-500 sm:text-2xl'>Calculando horas ...</p>
        </div>
      ) : (
        <div className='flex justify-around items-center py-3 mt-2 bg-white sm:text-2xl'>
          <div className='flex gap-2 justify-end'>
            <h1 className='text-green-600'>Entrada:</h1>
            {clocker?.entry}
          </div>
          <div className='flex gap-2 justify-end '>
            <h1 className='text-blue-800'>Tiempo:</h1>
            {hoursWorked && !loading ? (
              <p> {hours}</p>
            ) : (
              <h1 className='text-green-500'>Calculando...</h1>
            )}
          </div>
        </div>
      )}
      <div className='flex flex-col  justify-around items-center h-[calc(100vh-111px)] '>
        {clocker?.active ? (
          <div className='bg-transparent flex flex-col justify-center '>
            <button
              disabled={loading}
              type='button'
              className={`border-2 border-blue-300  gap-4  rounded-full bg-white hover:bg-gray-100 `}
              onClick={handleWorkExit}
            >
              <IoFingerPrintOutline
                size={'150px'}
                className='m-3 '
                style={{ margin: 20 }}
                color='red'
              />
              <p className='text-center text-xl p-3 '>Salir</p>
            </button>
          </div>
        ) : (
          <div className='bg-transparent flex flex-col justify-center '>
            <button
              disabled={loading}
              type='button'
              className={`border-2 border-blue-300  gap-4  rounded-full bg-white hover:bg-gray-100 `}
              onClick={() => handleWorkSign(profile!)}
            >
              <IoFingerPrintOutline
                size={'150px'}
                style={{ margin: 20 }}
                color='green'
              />
              <p className='text-center text-xl p-3 '>Entrar</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FingerPrint;
