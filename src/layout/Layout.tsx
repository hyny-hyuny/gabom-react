import NavBar from '@/components/molecules/NavBar';
import Header from '@/components/molecules/Header';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div className="layout">
      <h1>Layout</h1>
      <Header></Header>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default Layout;
