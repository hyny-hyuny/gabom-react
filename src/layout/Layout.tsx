import NavBar from '@/components/molecules/NavBar';
import Header from '@/components/molecules/Header';
import { Outlet, useLocation } from 'react-router';
import { useCallback } from 'react';

function Layout() {
  const location = useLocation();

  const getIsDepth = useCallback(() => {
    return location.pathname.split('/').length > 2;
  },[location]);

  return (
    <div className="layout">
      <h1>Layout</h1>
      <Header depth={getIsDepth()} />
      <Outlet />
      <NavBar />
    </div>
  );
}

export default Layout;
