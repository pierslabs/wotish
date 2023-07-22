import moment from 'moment';
import { FC } from 'react';

export interface ClockerRowProps {
  date: string;
  entry: string[];
  exit: string[];
  hours: number;
  index: number;
}

// Refactor this component to use the Clocker type
const ClockerRow: FC<ClockerRowProps> = ({
  entry,
  exit,
  index,
  date,
  hours,
}) => {
  const duration = moment.duration(hours, 'hours');

  // Obtener las horas, minutos y segundos de la duración
  const formattedHours = duration.hours().toString().padStart(2, '0');
  const formattedMinutes = duration.minutes().toString().padStart(2, '0');
  const formattedSeconds = duration.seconds().toString().padStart(2, '0');

  return (
    <tr
      className={`${
        index % 2 === 0 ? 'bg-gray-200' : ''
      } border p-2 cursor-pointer`}
    >
      <td className='p-3'>
        <p className='text-gray-500'>{date}</p>
      </td>
      <td className='p-3'>
        {entry.map((entry) => (
          <p key={entry} className='text-gray-500'>
            {moment(entry).format('HH:mm')}
          </p>
        ))}
      </td>
      <td className='p-3'>
        {exit.map((exit) => (
          <p key={exit} className='text-gray-500'>
            {moment(exit).format('HH:mm')}
          </p>
        ))}
      </td>
      <td className='p-3'>
        <p className='text-gray-500'>{`${formattedHours}:${formattedMinutes}:${formattedSeconds}`}</p>
      </td>
    </tr>
  );
};

export default ClockerRow;
