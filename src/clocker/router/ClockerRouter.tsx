import { ClockerProvider } from '../context/ClockerContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import User from '../pages/User';
import Home from '../pages/Home';
import Comments from '../pages/Comments';
import Wellness from '../pages/Wellness';
import WorkRecord from '../pages/WorkRecord';
import WorkShift from '../pages/WorkShift';

const ClockerRouter = () => {
  return (
    <ClockerProvider>
      <Routes>
        <Route path='/clocker' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/work-shift' element={<WorkShift />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/work-record' element={<WorkRecord />} />
        <Route path='/wellness' element={<Wellness />} />
        <Route path='/*' element={<Navigate to='clocker' />} />
      </Routes>
    </ClockerProvider>
  );
};

export default ClockerRouter;
