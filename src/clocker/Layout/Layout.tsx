import { FC } from 'react';
import Sidebar from '../components/Sidebar';

import Navbar from '../components/Navbar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
