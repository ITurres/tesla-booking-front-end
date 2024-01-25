import { Outlet } from 'react-router-dom';
import SidePanel from './SidePanel';

const Layout = () => (
  <main>
    <SidePanel />
    <Outlet />
  </main>
);

export default Layout;
