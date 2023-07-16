/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { IoFingerPrintOutline } from 'react-icons/io5';
import {
  createNewCLocker,
  getLastActiveClocker,
  updateCLocker,
} from '../../db/supabase';
import { ToastContainer, toast } from 'react-toastify';
import moment, { Duration } from 'moment';

export interface Clocker {
  id: number;
  created_at: string;
  id_profile: string;
  entry: string;
  exit: string;
  active: boolean;
  total_hours: string;
}

const WorkShift = () => {
  const [loading, setIsLoading] = useState(false);
  const [clocker, setClocker] = useState<Clocker>();
  const [hoursWorked, setHoursWorked] = useState<Duration | undefined>(
    undefined
  );

  const { handleNavbarColor, profile } = useContext(ClockerContext);

  useEffect(() => {
    handleNavbarColor(NavbarColor.WORK_SHIFT);
  }, [handleNavbarColor]);

  const handleWorkSign = async () => {
    setIsLoading(true);
    if (profile?.id_profile) {
      const res = await createNewCLocker(profile?.id_profile);
      console.log(res);
      if (res?.error) {
        return toast.error('Error al registrar el turno');
      }

      if (res?.status === 201) {
        toast.success('Turno registrado');
      }

      if (res?.data) setClocker(res.data[0]);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleWorkExit = async () => {
    setIsLoading(true);
    if (clocker?.id) {
      const res = await updateCLocker(clocker?.id);

      if (res?.error) {
        return toast.error('Error al registrar el turno');
      }

      if (res?.status === 200) {
        setClocker(res.data[0]);
        toast.success('Turno registrado');
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getLastClocker = async () => {
    setIsLoading(true);
    if (!profile) {
      setIsLoading(false);
      return;
    }

    const clockerEntry = await getLastActiveClocker(profile?.id_profile);

    if (clockerEntry?.error) {
      setIsLoading(false);
      return toast.error('Hemos tenido un error');
    }

    if (!clockerEntry?.data[0]?.entry) {
      setClocker({ ...clockerEntry?.data[0], entry: 'No hay turno activo' });
    }

    if (clockerEntry?.data[0]) {
      setClocker({
        ...clockerEntry?.data[0],
        entry: moment(clockerEntry?.data[0]?.entry).format('HH:mm:ss'),
      });
    }

    setIsLoading(false);
  };

  const formatHoursWorked = (): Duration | undefined => {
    const cureentTime = moment();
    const entryTime = clocker?.created_at;
    const hoursWorked: Duration | undefined = moment.duration(
      cureentTime.diff(entryTime)
    );

    return hoursWorked;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const result = formatHoursWorked();
      setHoursWorked(result);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [hoursWorked]);

  useEffect(() => {
    getLastClocker();
  }, [clocker?.active]);

  return (
    <Layout>
      <ToastContainer />
      {loading ? null : (
        <div className='flex justify-between items-center p-1 mt-2'>
          <div className='flex gap-1 justify-end'>
            <h1>Entrada:</h1>
            {clocker?.entry}
          </div>
          <div className='flex gap-1 justify-end'>
            <h1>Tiempo:</h1>
            {hoursWorked &&
              `${hoursWorked.hours()}:${hoursWorked.minutes()}:${hoursWorked.seconds()}`}
          </div>
        </div>
      )}
      <div className='flex flex-col  justify-around items-center h-[calc(100vh-50px)]'>
        {clocker?.active ? (
          <div>
            <button
              type='button'
              className={`border-2 border-blue-300 flex flex-col justify-between gap-4 items-center`}
              onClick={handleWorkExit}
            >
              <IoFingerPrintOutline size={'30vw'} style={{ margin: 20 }} />
              <p className='text-center w-full  bg-green-500 p-2 text-white'>
                Salir
              </p>
            </button>
          </div>
        ) : (
          <div>
            <button
              type='button'
              className={`border-2 border-blue-300 flex flex-col justify-between gap-4 items-center`}
              onClick={handleWorkSign}
            >
              <IoFingerPrintOutline size={'30vw'} style={{ margin: 20 }} />
              <p className='text-center w-full  bg-blue-500 p-2 text-white'>
                Entrar
              </p>
            </button>
          </div>
        )}
        <div className='flex gap-3'></div>
      </div>
    </Layout>
  );
};

export default WorkShift;
