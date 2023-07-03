import { FC, JSX } from 'react';

interface CardListProps {
  children: JSX.Element | JSX.Element[];
}

const CardList: FC<CardListProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {children}
    </div>
  );
};

export default CardList;
