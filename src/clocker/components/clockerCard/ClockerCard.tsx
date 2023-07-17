import moment from 'moment';
import { FC } from 'react';

export interface ClockerCardProps {
  entry: string;
  exit: string;
}

const ClockerCard: FC<ClockerCardProps> = ({ entry, exit }) => {
  return (
    <div className='flex justify-around items-center border p-2'>
      <div className='bg-white p-2 flex gap-2 '>
        <label>Fecha:</label>
        <p className='text-gray-500'>{moment(entry).format('DD/MM/YYYY')}</p>
      </div>
      <div className='bg-white p-2 flex gap-2 '>
        <label>Entrada: </label>
        <p className='text-gray-500'>{moment(entry).format(' HH:mm')}</p>
      </div>
      <div className='bg-white p-2 flex gap-2 '>
        <label>Salida: </label>
        <p className='text-gray-500'>{moment(exit).format(' HH:mm')}</p>
      </div>
    </div>
  );
};

export default ClockerCard;
