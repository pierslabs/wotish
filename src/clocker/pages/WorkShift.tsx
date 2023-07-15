import { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { ClockerContext } from '../context/ClockerContext';
import { NavbarColor } from '../components/Navbar/navbar.enum';

const WorkShift = () => {
  const { handleNavbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.WORK_SHIFT);
  }, []);

  return (
    <Layout>
      <div>WorkShift</div>
    </Layout>
  );
};

export default WorkShift;
