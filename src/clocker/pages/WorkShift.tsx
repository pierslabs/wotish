import { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { ToastContainer } from 'react-toastify';
import FingerPrint from '../components/fingerPrint/FingerPrint';

const WorkShift = () => {
  const { handleNavbarColor, profile } = useContext(ClockerContext);

  useEffect(() => {
    handleNavbarColor(NavbarColor.WORK_SHIFT);
  }, [handleNavbarColor]);

  return (
    <Layout>
      <ToastContainer />
      <div className='waves'>
        <FingerPrint profile={profile} />
      </div>
    </Layout>
  );
};

export default WorkShift;
