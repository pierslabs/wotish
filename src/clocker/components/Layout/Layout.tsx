import { FC } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

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
