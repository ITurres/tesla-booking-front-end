import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    <header>Header</header>
    <main>
      <Outlet />
    </main>
    <footer>Footer</footer>
  </>
);

export default Layout;
