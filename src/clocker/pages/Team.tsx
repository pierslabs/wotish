import { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { ClockerContext } from '../context/ClockerContext';

const Team = () => {
  const { handleNavbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.TEAM);
  }, [handleNavbarColor]);
  return (
    <Layout>
      <div>Team</div>
    </Layout>
  );
};

export default Team;
