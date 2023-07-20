import { FC, useEffect, useState } from 'react';
import { ShowSelected } from '../../pages/User';
import { getUserClockers } from '../../../db/supabase';
import { Profile, User } from '../../context/context.interface';
import { Clocker } from '../fingerPrint/fingerPrint.types';
import Table from '../common/Table';
import ClockerRow from '../clockerRow/ClockerRow';
import { BsSearch } from 'react-icons/bs';
import moment from 'moment';

// refactor this interfaces to a global one
export interface ClockerTableProps {
  showTabSelected: ShowSelected;
  user: User;
  profile: Profile | undefined;
}

// Definimos la estructura del objeto resultante después de la reducción
interface ClockerTableState {
  date: string;
  entries: string[];
  exits: string[];
  totalHours: number;
}
type ResultAccumulator = { [date: string]: ClockerTableState };

interface ClockerTableResult {
  [date: string]: {
    date: string;
    entries: string[];
    exits: string[];
    totalHours: number;
  };
}

const ClockerTable: FC<ClockerTableProps> = ({
  showTabSelected,
  user,
  profile,
}) => {
  const [clockers, setClockers] = useState<Clocker[]>([]);

  useEffect(() => {
    if (profile) {
      getUserClockers(profile?.id_profile)
        .then((data) => data && setClockers(data.data!))
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Función para obtener la diferencia en horas entre dos fechas
  function getHourDifference(entry: string, exit: string) {
    const entryDate: Date = new Date(entry);
    const exitDate: Date = new Date(exit);
    const diffInMilliseconds = moment(exitDate).diff(moment(entryDate));
    const diffInHours = moment.duration(diffInMilliseconds).asHours();
    return diffInHours;
  }

  // Utilizar reduce para agrupar y calcular las horas
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
  const resultArray: ClockerTableState[] = Object.keys(result).map((key) => ({
    date: key,
    entries: result[key].entries,
    exits: result[key].exits,
    totalHours: result[key].totalHours,
  }));

  console.log(resultArray);

  return (
    <section
      className={`${
        showTabSelected.clockers ? '' : 'hidden'
      } transition duration-1000`}
    >
      <h1 className='mr-auto mt-6 p-3 flex justify-between items-center'>
        <p className='text-2xl'>Tus Registros</p>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <input
              type='text'
              className='border-2 border-gray-300 rounded-lg p-1 pl-8 focus:border-blue-500 focus:outline-none'
              placeholder='Buscar'
            />
            <BsSearch className='absolute top-1/2 left-2 transform -translate-y-1/2 s text-gray-500' />
          </div>
        </div>
      </h1>
      <hr />
      <Table heads={['Fecha', 'Entrada', 'Salida']}>
        {resultArray.map((clocker, index) => (
          <ClockerRow
            key={clocker.date}
            entry={clocker.entries}
            exit={clocker.exits}
            date={clocker.date}
            hours={clocker.totalHours}
            index={index}
          />
        ))}
      </Table>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'></div>
    </section>
  );
};

export default ClockerTable;
