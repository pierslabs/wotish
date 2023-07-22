/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
  profile: Profile | undefined;
  user: User;
}

const useClockerTable = ({ profile, user }: ClockerTableProps) => {
  const [clockers, setClockers] = useState<Clocker[]>([]);
  const [filterClockers, setFilterClockers] = useState<string | null>(null);

  function getHourDifference(entry: string, exit: string) {
    const entryDate: Date = new Date(entry);
    const exitDate: Date = new Date(exit);
    const diffInMilliseconds = moment(exitDate).diff(moment(entryDate));
    const diffInHours = moment.duration(diffInMilliseconds).asHours();
    return diffInHours;
  }

  const tableReducer: ClockerTableResult = clockers.reduce(
    (acc: ResultAccumulator, obj: Clocker) => {
      const dateStr: string = moment(obj.entry).format('DD/MM/YYYY');

      if (!acc[dateStr]) {
        acc[dateStr] = {
          date: dateStr,
          entries: [],
          exits: [],
          totalHours: 0,
          id: obj.id,
        };
      }

      acc[dateStr].entries.push(obj.entry);
      acc[dateStr].exits.push(obj.exit);

      const hoursDiff = getHourDifference(obj.entry, obj.exit);
      acc[dateStr].totalHours += hoursDiff;

      return acc;
    },
    {}
  );

  const clockersArray: ClockerTableState[] = Object.keys(tableReducer).map(
    (key) => ({
      date: key,
      entries: tableReducer[key].entries,
      exits: tableReducer[key].exits,
      totalHours: tableReducer[key].totalHours,
      id: tableReducer[key].id,
    })
  );

  const filteredClockers =
    typeof filterClockers === 'string' && filterClockers.length > 0
      ? clockersArray.filter((clocker) => {
          return clocker.date.startsWith(filterClockers);
        })
      : clockersArray;

  useEffect(() => {
    if (profile) {
      getUserClockers(profile?.id_profile)
        .then((data) => data && setClockers(data.data!))
        .catch((err) => console.log(err));
    }
  }, [user]);

  return {
    filterClockers,
    setFilterClockers,
    filteredClockers,
  };
};

export default useClockerTable;
