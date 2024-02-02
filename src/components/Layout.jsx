import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SidePanel from './SidePanel';
import RegistrationPanel from './RegistrationPanel';

const Layout = () => {
  const active = useSelector((state) => state.users.registrationPanel.active);

  return (
    <main>
      <SidePanel />
      {active && <RegistrationPanel />}
      <Outlet />
    </main>
  );
};

export default Layout;
