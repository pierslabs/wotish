import { Auth } from '@supabase/auth-ui-react';
import useAuth from '../hooks/useAuth';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const Login = () => {
  console.log('WeLcome to Login');
  const { supabase } = useAuth();
  return (
    <div
      className='flex flex-col align-middle justify-center   bg-black h-100 '
      style={{ height: '100vh' }}
    >
      <img
        src={' /assets/wotish.png'}
        alt='wotish logo'
        className='mx-auto sm:w-1/3 w-3/4'
      />
      <div className='sm:mx-auto sm:w-1/3  mx-auto w-3/4 mt-12'>
        <Auth
          providers={['google']}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          showLinks={false}
          onlyThirdPartyProviders
        />
      </div>
    </div>
  );
};

export default Login;
