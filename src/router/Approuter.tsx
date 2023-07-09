import { Navigate, Route, Routes } from 'react-router-dom';
import ClockerRouter from '../clocker/router/ClockerRouter';
import AuthRouter from '../auth/router/AuthRouter';
import useAuth from '../hooks/useAuth';
import Loader from '../clocker/components/common/Loader';
import { EAuthStatus } from '../enum/authStatus.enum';

const Approuter = () => {
  const { status, authenticated } = useAuth();

  if (status === EAuthStatus.LOADING) {
    return <Loader />;
  }
  return (
    <Routes>
      {authenticated ? (
        <Route path='/*' element={<ClockerRouter />} />
      ) : (
        <Route path='/auth/*' element={<AuthRouter />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login/' />} />
    </Routes>
  );
};

export default Approuter;
