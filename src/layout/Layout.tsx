import NavBar from '@/components/molecules/NavBar';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default Layout;
