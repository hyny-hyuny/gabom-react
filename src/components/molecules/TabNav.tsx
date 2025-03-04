import TimeIcon from '../../assets/time.svg?react';
import SaveIcon from '../../assets/save.svg?react';
import PlaceIcon from '../../assets/place.svg?react';
import ReviewIcon from '../../assets/review.svg?react';
import TabNavItem from '../atoms/TabNavItem';
import { useSearchParams } from 'react-router';

export type TabNavItemSearchParam =
  | 'review'
  | 'place'
  | 'bookmark'
  | 'reservation';

export type IconType = React.FC<React.SVGProps<SVGSVGElement>> | string;

export interface TabNavItemData {
  searchParam: TabNavItemSearchParam;
  label: string;
  Icon: IconType;
}

const tabNavItems: TabNavItemData[] = [
  { searchParam: 'review', label: '리뷰', Icon: ReviewIcon },
  { searchParam: 'place', label: '방문장소', Icon: PlaceIcon },
  { searchParam: 'bookmark', label: '저장', Icon: SaveIcon },
  { searchParam: 'reservation', label: '예약', Icon: TimeIcon },
];

function TabNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchParam = searchParams.get('tab') as TabNavItemSearchParam;

  const handleSearchParam = (searchParam: TabNavItemSearchParam) => {
    searchParams.set('tab', searchParam);
    setSearchParams(searchParams);
  };

  const tabNavItemsMap = tabNavItems.map((item) => {
    return (
      <TabNavItem
        key={item.searchParam}
        {...item}
        currentSearchParam={currentSearchParam}
        handleSearchParam={handleSearchParam}
      />
    );
  });

  return (
    <nav
      className="top-inner-border-bottom px-4 border-gray-100"
      aria-label="내 정보 목록 내비게이션"
    >
      <ul className="flex h-11">{tabNavItemsMap}</ul>
    </nav>
  );
}

export default TabNav;
