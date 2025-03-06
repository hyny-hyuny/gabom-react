import { Link } from 'react-router';
import Badge from '../atoms/Badge';
import ImageField from '../atoms/ImageField';
import Tag from '../atoms/Tag';
import BookmarkBtn from '../atoms/BookmarkBtn';
import { tm } from '@/utils/tw-merge';
import { useState } from 'react';

interface ExhibitionCardProps {
  children: string;
  status?: string;
  reviews?: number;
  place: string;
  ageRange?: string;
  period?: string;
  size?: string;
  isBookmark: boolean;
  handleAddBookmark?: (isBookmark: boolean) => void;
}

function ExhibitionCard({
  children,
  status = '',
  reviews,
  place,
  ageRange = '',
  period = '',
  size,
  isBookmark,
  handleAddBookmark,
}: ExhibitionCardProps) {
  const [isCurrentBookmark, setIsCurrentBookmark] = useState(isBookmark);
  const handleClickBookmark = () => {
    setIsCurrentBookmark((prev) => !prev);

    handleAddBookmark?.(!isCurrentBookmark);
  };

  const isSmall = size === 'small';

  return (
    <>
      {isSmall ? (
        <article className="relative rounded-sm p-custom-3 flex border-1 border-gray-100">
          <Link
            to={'#'}
            className={tm('flex items-center gap-custom-3 flex-1')}
          >
            <div
              className={tm('order-1 flex flex-col items-start flex-1 gap-0.5')}
            >
              <strong className="label-md">{children}</strong>
              <Tag emoji="📍" label={place} />
            </div>
            <ImageField width={tm('2.5rem')} height={tm('3.375rem')} />
          </Link>
          <BookmarkBtn
            isBookmark={isCurrentBookmark}
            onClickBookmark={handleClickBookmark}
          />
        </article>
      ) : (
        <article className="relative">
          <Link to={'#'} className={tm('flex items-center gap-custom-3')}>
            <div
              className={tm(
                'order-1 h-[138px] flex flex-col justify-between items-start flex-1'
              )}
            >
              <strong className="label-md">{children}</strong>
              <Badge>{status}</Badge>
              <Tag emoji="🗓️" label={period} />
              <Tag emoji="📍" label={place} />
              <Tag emoji="👥" label={ageRange} />
              <p className="paragraph-xs text-gray-500">
                방문자 리뷰 {reviews}
              </p>
            </div>
            <ImageField width={tm('6.25rem')} height={tm('8.625rem')} />
          </Link>
          <BookmarkBtn
            isBookmark={isCurrentBookmark}
            onClickBookmark={handleClickBookmark}
            className={tm('absolute left-custom-2 bottom-custom-2')}
          />
        </article>
      )}
    </>
  );
}

export default ExhibitionCard;
