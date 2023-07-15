import { useContext, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { NavbarColor } from '../components/Navbar/navbar.enum';
import { ClockerContext } from '../context/ClockerContext';

const Comments = () => {
  const { handleNavbarColor } = useContext(ClockerContext);
  useEffect(() => {
    handleNavbarColor(NavbarColor.COMMENTS);
  }, []);
  return (
    <Layout>
      <div>Comments</div>
    </Layout>
  );
};

export default Comments;
