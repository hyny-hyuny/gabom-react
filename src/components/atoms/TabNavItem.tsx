import { Link } from 'react-router';
import { TabNavItemData, TabNavItemSearchParam } from '../molecules/TabNav';

type TabNavItemProps = TabNavItemData & {
  currentSearchParam: TabNavItemSearchParam;
  handleSearchParam: (param: TabNavItemSearchParam) => void;
};

function TabNavItem({
  searchParam,
  label,
  Icon,
  currentSearchParam,
  handleSearchParam,
}: TabNavItemProps) {
  const isCurrent = currentSearchParam === searchParam;

  const handleClickNavLink = () => {
    handleSearchParam(searchParam);
  };

  return (
    <li className="flex flex-1">
      <Link
        to={`?tab=${searchParam}`}
        onClick={handleClickNavLink}
        className={`flex ${isCurrent ? 'text-tertiary' : 'border-transparent'} border-b-2  w-full flex gap-1 justify-center items-center py-1`}
      >
        <Icon width={18} height={18} />
        <span className={`label-sm font-medium`}>{label}</span>
      </Link>
    </li>
  );
}

export default TabNavItem;
