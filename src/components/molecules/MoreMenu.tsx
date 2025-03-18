import MoreIcon from '@/assets/more.svg?react';
import PopoverMenu, { PopoverMenuProps } from './PopoverMenu';
import { useEffect, useRef, useState } from 'react';
import { tm } from '@/utils/tw-merge';

type MoreMenuProps = PopoverMenuProps & {
  customClass?: string;
};

function MoreMenu({ review, onDelete, customClass }: MoreMenuProps) {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMoreBtn = () => {
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
    <div className={tm('relative w-fit h-fit', customClass)} ref={menuRef}>
      <button className="cursor-pointer block" onClick={handleMoreBtn}>
        <MoreIcon width={24} height={24} />
      </button>
      {isOpened && <PopoverMenu review={review} onDelete={onDelete} />}
    </div>
  );
}
export default MoreMenu;
