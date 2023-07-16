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
            {hoursWorked &&
              `${hoursWorked.hours()}:${hoursWorked.minutes()}:${hoursWorked.seconds()}`}
          </div>
        </div>
      )}
      <div className='flex flex-col  justify-around items-center h-[calc(100vh-50px)] '>
        {clocker?.active ? (
          <div className='bg-white'>
            <button
              disabled={loading}
              type='button'
              className={`border-2 border-blue-300 flex flex-col justify-between gap-4 items-center`}
              onClick={handleWorkExit}
            >
              <IoFingerPrintOutline size={'300px'} className='m-3 ' />
              <p className='text-center w-full  bg-green-500 p-2 text-white'>
                Salir
              </p>
            </button>
          </div>
        ) : (
          <div className='bg-white'>
            <button
              disabled={loading}
              type='button'
              className={`border-2 border-blue-300 flex flex-col justify-between gap-4 items-center`}
              onClick={() => handleWorkSign(profile!)}
            >
              <IoFingerPrintOutline size={'300px'} style={{ margin: 20 }} />
              <p className='text-center w-full  bg-blue-500 p-2 text-white'>
                Entrar
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FingerPrint;
