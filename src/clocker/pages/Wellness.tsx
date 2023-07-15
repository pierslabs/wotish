import { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { ClockerContext } from '../context/ClockerContext';

const Wellness = () => {
  const { handleNavbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.WELLNESS);
  }, [handleNavbarColor]);
  return (
    <Layout>
      <div>Weellness</div>
    </Layout>
  );
};

export default Wellness;
