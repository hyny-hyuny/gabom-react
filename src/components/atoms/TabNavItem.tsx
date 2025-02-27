import { TabNavItemData, TabNavItemSearchParam } from '../molecules/TabNav';

type TabNavItemProps = TabNavItemData & {
  currentSearchParam: TabNavItemSearchParam;
  handleSearchParam: (param: TabNavItemSearchParam) => void;
};

function TabNavItem({
  searchParam,
  label,
  // Icon,
  currentSearchParam,
  handleSearchParam,
}: TabNavItemProps) {
  const isCurrent = currentSearchParam === searchParam;

  const handleClickNavLink = () => {
    handleSearchParam(searchParam);
  };

  return (
    <li className='flex flex-1'>
      <button className={`${isCurrent ?'text-tertairy' :'border-transparent'} border-b-2  w-full flex justify-center items-center py-1 px-4`} onClick={handleClickNavLink}>
        {/* <Icon /> */}
        <span className={`text-sm/relaxed font-medium`}>{label}</span>
      </button>
    </li>
  );
}

export default TabNavItem;
