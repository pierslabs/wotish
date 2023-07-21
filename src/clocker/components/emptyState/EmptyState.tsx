import { BsFolderX } from 'react-icons/bs';

const EmptyState = () => {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-90px)]'>
      <div className='flex flex-col justify-center items-center'>
        <BsFolderX className='text-6xl text-gray-300' size={200} />
        <h1 className='text-xl text-gray-600'>
          No has hecho ningun comentario aún.
        </h1>
      </div>
    </div>
  );
};

export default EmptyState;
