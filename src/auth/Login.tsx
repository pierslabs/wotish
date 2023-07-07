import { Auth } from '@supabase/auth-ui-react';
import useAuth from '../hooks/useAuth';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { AiOutlineFieldTime } from 'react-icons/ai';

const Login = () => {
  console.log('WeLcome to Login');
  const { supabase } = useAuth();
  return (
    <div>
      <div className=' flex justify-end items-center p-2 fixed bg-white w-full'>
        <AiOutlineFieldTime size={50} color='blue' />
        <h1 className='text-xl font-bold  ml-1 '>Wotish</h1>
      </div>
      <div
        className='flex flex-col  justify-center h-100 p-2 bg-gradient-to-b from-blue-800 '
        style={{ height: '100vh' }}
      >
        <div className='sm:mx-auto md:w-1/3 w-full mx-auto  border bg-zinc-50  p-3 '>
          <Auth
            providers={['google']}
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            showLinks={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
