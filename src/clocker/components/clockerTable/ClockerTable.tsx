import { FC, useEffect, useState } from 'react';
import { ShowSelected } from '../../pages/User';
import { getUserClockers } from '../../../db/supabase';
import { Profile, User } from '../../context/context.interface';
import { Clocker } from '../fingerPrint/fingerPrint.types';
import Table from '../common/Table';
import ClockerRow from '../clockerRow/ClockerRow';
import { BsSearch } from 'react-icons/bs';

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
  const [clockers, setClockers] = useState<Clocker[]>([]);

  useEffect(() => {
    if (profile) {
      getUserClockers(profile?.id_profile)
        .then((data) => data && setClockers(data.data!))
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
        {clockers.map((clocker, index) => (
          <ClockerRow
            key={clocker.id}
            entry={clocker.exit}
            exit={clocker.exit}
            index={index}
          />
        ))}
      </Table>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'></div>
    </section>
  );
};

export default ClockerTable;
