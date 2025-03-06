import { ComponentProps } from 'react';
import Bookmark from '@/assets/bookmark.svg?react';
import { tm } from '@/utils/tw-merge';

type BookmarkBtnProps = ComponentProps<'button'> & {
  isBookmark: boolean;
  onClickBookmark?: (value: boolean) => void;
  width?: number;
  height?: number;
};

function BookmarkBtn({
  isBookmark,
  onClickBookmark,
  width = 24,
  height = 24,
  className,
}: BookmarkBtnProps) {
  const handleChangeValue = () => {
    onClickBookmark?.(!isBookmark);
  };

  return (
    <button
      onClick={handleChangeValue}
      className={tm(`${isBookmark ? 'text-primary' : 'text-gray-100'}`,className)}
    >
      <Bookmark width={width} height={height} />
    </button>
  );
}

export default BookmarkBtn;
