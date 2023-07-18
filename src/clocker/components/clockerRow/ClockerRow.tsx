import moment from 'moment';
import { FC } from 'react';

export interface ClockerRowProps {
  entry: string;
  exit: string;
  index: number;
}

// Refactor this component to use the Clocker type
const ClockerRow: FC<ClockerRowProps> = ({ entry, exit, index }) => {
  console.log(index);
  return (
    <tr className={`${index % 2 === 0 ? 'bg-gray-200' : ''} border p-2`}>
      <td className='p-3'>
        <p className='text-gray-500'>{moment(entry).format('DD/MM/YYYY')}</p>
      </td>
      <td className='p-3'>
        <p className='text-gray-500'>{moment(entry).format(' HH:mm')}</p>
      </td>
      <td className='p-3'>
        <p className='text-gray-500'>{moment(exit).format(' HH:mm')}</p>
      </td>
    </tr>
  );
};

export default ClockerRow;
