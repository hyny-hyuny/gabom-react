import { NavLink } from 'react-router';
import { type NavItemData, type NavItemPath } from '../molecules/NavBar';

type NavItemProps = NavItemData & {
  currentPath: NavItemPath;
  handleCurrentPage: (path: NavItemPath) => void;
};

function NavItem({
  label,
  path,
  currentPath,
  Icon,
  handleCurrentPage,
}: NavItemProps) {
  const isCurrent = path === currentPath;

  const handleNavLink = () => {
    handleCurrentPage(path);
  };

  return (
    <li className='flex flex-1'>
      <NavLink
        className={`w-full items-center flex flex-col justify-center px-3 pb-2 pt-1 border-t-4  ${isCurrent ? 'text-tertiary border-primary' : 'border-transparent'}`}
        to={path}
        onClick={handleNavLink}
      >
        <Icon width={24} height={24}/>
        <span className='label-sm font-medium'>{label}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
