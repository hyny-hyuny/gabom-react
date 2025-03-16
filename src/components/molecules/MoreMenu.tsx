import MoreIcon from '@/assets/more.svg?react';
import PopoverMenu from './PopoverMenu';
import { useState } from 'react';

function MoreMenu() {
  const [isOpened, setIsOpened] = useState(true);

  const handleMoreBtn = () => {
    console.log('더 보기 버튼 버튼');
    setIsOpened((prev) => !prev);
  };

  return (
    <div className="relative bg-green-400 w-fit h-fit">
      <button className="cursor-pointer block" onClick={handleMoreBtn}>
        <MoreIcon width={24} height={24} />
      </button>
      <PopoverMenu isOpened={isOpened} />
    </div>
  );
}
export default MoreMenu;
