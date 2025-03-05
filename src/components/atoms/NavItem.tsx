import { NavLink } from 'react-router';
import { type NavItemData } from '../molecules/NavBar';

type NavItemProps = NavItemData & {};

function NavItem({ label, path, Icon }: NavItemProps) {
  return (
    <li className="flex flex-1">
      <NavLink
        className={({ isActive }) =>
          `w-full items-center flex flex-col justify-center px-3 pb-2 pt-1 border-t-4  ${isActive ? 'text-tertiary border-primary' : 'border-transparent'}`
        }
        to={path}
      >
        <Icon width={24} height={24} />
        <span className="label-sm font-medium">{label}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
