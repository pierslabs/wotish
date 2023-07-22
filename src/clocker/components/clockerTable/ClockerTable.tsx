import { ChangeEvent, FC } from 'react';
import { ShowSelected } from '../../pages/User';
import { Profile, User } from '../../context/context.interface';
import Table from '../common/Table';
import ClockerRow from '../clockerRow/ClockerRow';
import { BsSearch } from 'react-icons/bs';
import useClockerTable from './useClockerTable';

export interface ClockerTableProps {
  showTabSelected: ShowSelected;
  user: User;
  profile: Profile | undefined;
}

const ClockerTable: FC<ClockerTableProps> = ({
  showTabSelected,
  user,
  profile,
}) => {
  const { filteredClockers, setFilterClockers, filterClockers } =
    useClockerTable({
      user,
      profile,
    });

  return (
    <section
      className={`${
        showTabSelected.clockers ? '' : 'hidden'
      } transition duration-1000`}
    >
      <div className='mt-6 py-3 flex items-center justify-between p-2'>
        <p className='sm:text-2xl min-w-[100px]'>Tus Registros</p>

        <div className='relative w-[200px]'>
          <input
            type='text'
            className='border-2 border-gray-300 rounded-lg p-1 pl-8 focus:border-blue-500 focus:outline-none max-w-full'
            placeholder='Buscar Fecha'
            name='filterClockers'
            value={filterClockers ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFilterClockers(e.target.value)
            }
          />
          <BsSearch className='absolute top-1/2 left-2 transform -translate-y-1/2 s text-gray-500' />
        </div>
      </div>

      <hr />
      <Table heads={['Fecha', 'Entrada', 'Salida', 'Horas']}>
        {filteredClockers.map((clocker, index) => (
          <ClockerRow
            key={clocker.id}
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
