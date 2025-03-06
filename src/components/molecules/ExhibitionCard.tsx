import { Link } from 'react-router';
import Badge from '../atoms/Badge';
import ImageField from '../atoms/ImageField';
import Tag from '../atoms/Tag';
import BookmarkBtn from '../atoms/BookmarkBtn';
import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

interface ExhibitionCardProps {
  children: string;
  status: string;
  reviews: number;
  place: string;
  age_range: string;
  period: string;
  isBookmark: boolean;
  handleAddBookmark?: (isBookmark: boolean) => void;
}

function ExhibitionCard({
  children,
  status,
  reviews,
  place,
  age_range,
  period,
  isBookmark,
  handleAddBookmark,
}: ExhibitionCardProps) {
  const [isCurrentBookmark, setIsCurrentBookmark] = useState(isBookmark);
  const handleClickBookmark = () => {
    setIsCurrentBookmark((prev) => !prev);

    handleAddBookmark?.(!isCurrentBookmark);
  };

  return (
    <article className="relative">
      <Link to={'#'} className={tm('flex items-center gap-custom-3')}>
        <div
          className={tm(
            'order-1 h-[138px] flex flex-col justify-between items-start flex-1'
          )}
        >
          <strong>{children}</strong>
          <Badge>{status}</Badge>
          <Tag emoji="🗓️" label={period} />
          <Tag emoji="📍" label={place} />
          <Tag emoji="👥" label={age_range} />
          <p className="paragraph-xs text-gray-500">방문자 리뷰 {reviews}</p>
        </div>
        <ImageField width={'6.25rem'} height={'8.625rem'} />
      </Link>
      <BookmarkBtn
        isBookmark={isCurrentBookmark}
        onClickBookmark={handleClickBookmark}
        className="absolute left-custom-2 bottom-custom-2"
      />
    </article>
  );
}

export default ExhibitionCard;
