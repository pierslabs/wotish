import { FC } from 'react';

interface ButtonProps {
  value: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ value, onClick }) => {
  return (
    <input
      type='submit'
      value={value}
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded '
      onClick={onClick}
    />
  );
};

export default Button;
