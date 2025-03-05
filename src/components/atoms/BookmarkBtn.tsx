import { ChangeEvent, useId } from 'react';
import Bookmark from '@/assets/bookmark.svg?react';

interface BookmarkBtnProps {
  isBookmark: boolean;
  onClickBookmark?: (value:boolean)=>void;
};

function BookmarkBtn({ isBookmark, onClickBookmark }: BookmarkBtnProps) {
  const id = useId();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onClickBookmark?.(e.target.checked);
  };

  return (
    <label
      htmlFor={id}
      className={`${isBookmark ? 'text-primary' : 'text-gray-100'}`}
    >
      <input
        onChange={handleChangeValue}
        id={id}
        type="checkbox"
        className="hidden"
        checked={isBookmark}
      />
      <Bookmark width={24} height={24} />
    </label>
  );
}

export default BookmarkBtn;
