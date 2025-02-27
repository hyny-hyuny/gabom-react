import { Outlet } from 'react-router';

function Layout() {
  return (
    <div className="layout">
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
