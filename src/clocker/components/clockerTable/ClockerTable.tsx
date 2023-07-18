import { FC, useEffect, useState } from 'react';
import { ShowSelected } from '../../pages/User';
import { getUserClockers } from '../../../db/supabase';
import ClockerCard from '../clockerCard/ClockerCard';
import { Profile, User } from '../../context/context.interface';
import { Clocker } from '../fingerPrint/fingerPrint.types';

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
      <h1 className='text-xl mr-auto mt-6 p-3'>Tus Registros</h1>
      <hr />
      {clockers.map((clocker) => (
        <ClockerCard entry={clocker.entry} exit={clocker.exit} />
      ))}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'></div>
    </section>
  );
};

export default ClockerTable;
