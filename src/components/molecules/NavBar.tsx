import { useState } from 'react';
import NavItem from '../atoms/NavItem';

import ExhibitionIcon from '../../assets/exhibition.svg?react';
import PlaceIcon from '../../assets/place.svg?react';
import ReviewIcon from '../../assets/review.svg?react';
import MyIcon from '../../assets/my.svg?react';

export type NavItemPath = '/exhibition' | '/place' | '/review' | '/my';

export interface NavItemData {
  label: string;
  path: NavItemPath;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const navItems: NavItemData[] = [
  { label: '전시', Icon: ExhibitionIcon, path: '/exhibition' },
  { label: '장소', Icon: PlaceIcon, path: '/place' },
  { label: '리뷰', Icon: ReviewIcon, path: '/review' },
  { label: 'MY', Icon: MyIcon, path: '/my' },
];

const getPath = (): NavItemPath => {
  return location.pathname as NavItemPath;
};


function NavBar() {
  const [currentPath, setCurrentPath] = useState<NavItemPath>(getPath);

  const handleCurrentPage = (path: NavItemPath) => {
    setCurrentPath(path);
  };

  const navItemsMap = navItems.map((item) => {
    return (
      <NavItem
        key={item.label}
        {...item}
        handleCurrentPage={handleCurrentPage}
        currentPath={currentPath}
      />
    );
  });

  return (
    <nav className='px-6 pb-3 nav-inner-border-top'>
      <ul className={'flex'}>{navItemsMap}</ul>
    </nav>
  );
}

export default NavBar;
