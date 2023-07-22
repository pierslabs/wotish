/* eslint-disable react-hooks/exhaustive-deps */
import moment from 'moment';
import { useState, useEffect } from 'react';
import { getUserClockers } from '../../../db/supabase';
import { Clocker } from '../fingerPrint/fingerPrint.types';

import {
  ClockerTableResult,
  ResultAccumulator,
  ClockerTableState,
} from './clockerTable.interface';
import { Profile, User } from '../../context/context.interface';

export interface ClockerTableProps {
  profile: Profile;
  user: User;
}

const useClockerTable = ({ profile, user }: ClockerTableProps) => {
  const [clockers, setClockers] = useState<Clocker[]>([]);

  // Función para obtener la diferencia en horas entre dos fechas
  function getHourDifference(entry: string, exit: string) {
    const entryDate: Date = new Date(entry);
    const exitDate: Date = new Date(exit);
    const diffInMilliseconds = moment(exitDate).diff(moment(entryDate));
    const diffInHours = moment.duration(diffInMilliseconds).asHours();
    return diffInHours;
  }

  const result: ClockerTableResult = clockers.reduce(
    (acc: ResultAccumulator, obj: Clocker) => {
      const dateStr: string = moment(obj.entry).format('DD/MM/YYYY');

      if (!acc[dateStr]) {
        acc[dateStr] = {
          date: dateStr,
          entries: [],
          exits: [],
          totalHours: 0,
        };
      }

      acc[dateStr].entries.push(obj.entry);
      acc[dateStr].exits.push(obj.exit);

      // Calcular la diferencia en horas entre entry y exit y acumular el total
      const hoursDiff = getHourDifference(obj.entry, obj.exit);
      acc[dateStr].totalHours += hoursDiff;

      return acc;
    },
    {}
  );
  // Convertir el objeto result en un array
  const clockersArray: ClockerTableState[] = Object.keys(result).map((key) => ({
    date: key,
    entries: result[key].entries,
    exits: result[key].exits,
    totalHours: result[key].totalHours,
  }));

  useEffect(() => {
    if (profile) {
      getUserClockers(profile?.id_profile)
        .then((data) => data && setClockers(data.data!))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return {
    clockersArray,
  };
};

export default useClockerTable;
