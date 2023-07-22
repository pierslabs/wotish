/* eslint-disable react-hooks/exhaustive-deps */
import moment, { Duration } from 'moment';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  createNewCLocker,
  updateCLocker,
  getLastActiveClocker,
} from '../../../db/supabase';
import { Profile } from '../../context/context.interface';
import { Clocker } from './fingerPrint.types';

const useFingerPrint = () => {
  const [loading, setIsLoading] = useState(false);
  const [clocker, setClocker] = useState<Clocker>();
  const [hoursWorked, setHoursWorked] = useState<Duration | undefined>(
    undefined
  );

  const handleWorkSign = async (profile: Profile) => {
    setIsLoading(true);
    if (profile?.id_profile) {
      const res = await createNewCLocker(profile?.id_profile);
      if (res?.error) {
        return toast.error('Error al registrar el turno', {
          position: 'top-center',
        });
      }

      if (res?.status === 201) {
        toast.success('Vamoooos 🚀!!!', {
          position: 'top-center',
        });
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
        return toast.error('Error al registrar el turno', {
          position: 'top-center',
        });
      }

      if (res?.status === 200) {
        setClocker(res.data[0]);
        toast.success(
          '¡Excelente trabajo, es hora de un merecido descanso 😄!',
          {
            position: 'top-center',
          }
        );
      }
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getLastClocker = async (profile: Profile) => {
    setIsLoading(true);
    if (!profile) {
      setIsLoading(false);
      return;
    }

    const clockerEntry = await getLastActiveClocker(profile?.id_profile);

    if (clockerEntry?.error) {
      setIsLoading(false);
      return toast.error('Hemos tenido un error', {
        position: 'top-center',
      });
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

  return {
    handleWorkSign,
    handleWorkExit,
    getLastClocker,
    clocker,
    hoursWorked,
    loading,
  };
};

export default useFingerPrint;
