import MoreIcon from '@/assets/more.svg?react';
import PopoverMenu, { PopoverMenuProps } from './PopoverMenu';
import { useEffect, useRef, useState } from 'react';

function MoreMenu({ review }: PopoverMenuProps) {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMoreBtn = () => {
    console.log('더 보기 버튼 버튼');
    setIsOpened((isOpened) => !isOpened);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpened(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute right-5 bg-green-400 w-fit h-fit" ref={menuRef}>
      <button className="cursor-pointer block" onClick={handleMoreBtn}>
        <MoreIcon width={24} height={24} />
      </button>
      {isOpened && <PopoverMenu review={review} />}
    </div>
  );
}
export default MoreMenu;
