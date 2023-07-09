import { FC, useContext, useState } from 'react';
import { ClockerContext } from '../../context/ClockerContext';
import { ToastContainer, toast } from 'react-toastify';
import { BsSearch } from 'react-icons/bs';
import Button from '../common/Button';

interface DNIFormProps {
  setFormVisible: (value: boolean) => void;
}

const DNIForm: FC<DNIFormProps> = ({ setFormVisible }) => {
  const { user } = useContext(ClockerContext);
  const [dni, setDni] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormVisible(true);
    user.dni = dni;
    toast.success('Tu DNI se ha guardado correctamente!');
    setFormVisible(false);
  };

  return (
    <>
      <ToastContainer theme='dark' position='top-center' />
      <form onSubmit={onSubmit}>
        <div className='bg-blue-100 border-blue-500 text-blue-700 border-l-4 p-4 mt-4 absolute top-1/3 left-2 right-2   text-center z-10 lg:w-2/3 sm:right-64 sm:left-64'>
          <p className='font-semibold'>
            Necesitamos tu DNI para el fichaje laboral.
          </p>
          <p className='text-sm'>
            El DNI es requerido por ley para llevar un registro preciso de los
            empleados y cumplir con las normativas laborales.
          </p>

          <div className='relative sm:w-1/5 mx-auto mt-4'>
            <input
              type='text'
              placeholder='Introduce tu DNI'
              className='pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md outline-none'
              value={dni}
              onChange={(e) => setDni(e.target.value)}
            />
            <span className='absolute left-3 top-3 text-gray-400'>
              <BsSearch />
            </span>
          </div>
          <Button value='Guardar' />
        </div>
      </form>
    </>
  );
};

export default DNIForm;
