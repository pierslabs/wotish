import { FC } from 'react';
import { CardProps } from '../interfaces/card.interface';

const CardItem: FC<CardProps> = ({ text, icon, title }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-6'>
      <div className='flex justify-between align-middle'>
        <h2 className='text-xl font-bold mb-4'>{title}</h2>
        {icon}
      </div>
      <p className='text-gray-700'>{text}</p>
    </div>
  );
};

export default CardItem;
