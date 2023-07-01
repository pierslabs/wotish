import { ClockerProvider } from '../context/ClockerContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import User from '../page/User';
import Home from '../page/Home';

const ClockerRouter = () => {
  return (
    <ClockerProvider>
      <Routes>
        <Route path='/clocker' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/*' element={<Navigate to='clocker' />} />
      </Routes>
    </ClockerProvider>
  );
};

export default ClockerRouter;
