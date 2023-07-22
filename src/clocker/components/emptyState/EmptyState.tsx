import { FC } from 'react';
import { BsFolderX } from 'react-icons/bs';

export interface EmptyStateProps {
  text?: string;
}

const EmptyState: FC<EmptyStateProps> = ({ text }) => {
  return (
    <div className='absolute  top-[50%] left-[25%] right-[25%] w-[50%]'>
      <div className='flex flex-col justify-center items-center'>
        <BsFolderX className='text-6xl text-gray-300' size={100} />
        <h1 className='text-gray-600 sm:text-xl text-sm'>
          {text ? text : 'Hemos tenido un problema.'}
        </h1>
      </div>
    </div>
  );
};

export default EmptyState;
