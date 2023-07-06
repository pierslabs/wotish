import { Auth } from '@supabase/auth-ui-react';
import useAuth from '../hooks/useAuth';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { AiOutlineFieldTime } from 'react-icons/ai';

const Login = () => {
  console.log('WeLcome to Login');
  const { supabase } = useAuth();
  return (
    <div
      className='flex flex-col align-middle justify-center  h-100 p-2'
      style={{ height: '100vh' }}
    >
      <div className='absolute top-2'>
        <AiOutlineFieldTime size={50} color='blue' />
        <h1 className='text-xl font-bold  absolute ml-2 left-12 top-3'>
          Wotish
        </h1>
      </div>
      <div className='sm:mx-auto sm:w-1/3  mx-auto w-3/4 mt-12'>
        <Auth
          providers={['google']}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          showLinks={true}
        />
      </div>
    </div>
  );
};

export default Login;
