import { FC } from 'react';
import { CardProps } from '../interfaces/card.interface';
import { useNavigate } from 'react-router-dom';

const CardItem: FC<CardProps> = ({ text, icon, title, path }) => {
  const navigate = useNavigate();
  return (
    <div
      className='bg-white rounded-lg shadow-lg p-6  border hover:border-blue-300  hover:scale-110 duration-500 cursor-pointer'
      onClick={() => navigate(path)}
    >
      <div className='flex justify-between align-middle'>
        <h2 className='text-xl font-bold mb-4'>{title}</h2>
        {icon}
      </div>
      <p className='text-gray-700'>{text}</p>
    </div>
  );
};

export default CardItem;
