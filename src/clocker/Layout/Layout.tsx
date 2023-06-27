import { FC, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import { ClockerContext } from '../context/ClockerContext';
import { GoSidebarCollapse } from 'react-icons/go';
import Navbar from '../components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
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
