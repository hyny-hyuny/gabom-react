import BookmarkBtn from '../atoms/BookmarkBtn';
import ImageField from '../atoms/ImageField';
import Tag from '../atoms/Tag';
import { useState } from 'react';
import { Link } from 'react-router';

type AddressType = 'full' | 'shorcut';

interface PlaceCardProps {
  name: string;
  type: AddressType;
  img: string;
  linkTo: string;
  address: string;
  isBookmark: boolean;
  handleAddBookmark?: (isBookmark: boolean) => void;
}

function PlaceCard({
  name,
  type,
  img,
  linkTo,
  address,
  isBookmark,
  handleAddBookmark,
}: PlaceCardProps) {
  const [isCurrentBookmark, setIsCurrentBookmark] = useState(isBookmark);
  const isFullType = type === 'full';

  const handleClickBookmark = () => {
    setIsCurrentBookmark((prev) => !prev);

    handleAddBookmark?.(!isCurrentBookmark);
  };

  return (
    <article
      className={`flex items-center ${isFullType ? '' : 'p-3 rounded-sm bg-white'}`}
    >

      <Link to={linkTo} className='flex flex-1'>
        <ImageField
          width={isFullType ? '5.25rem' : '4rem'}
          height={isFullType ? '5.25rem' : '4rem'}
          src={img}
          alt={'장소 이미지'}
        />
        <div className="flex flex-col ml-4 flex-1 gap-1 justify-center items-start text-contents-content-primary line-clamp-3">
          <strong className="font-medium ">{name}</strong>
          {isFullType ? (
            <span className="paragraph-xs">{address}</span>
          ) : (
            <Tag emoji="📍" label={address} />
          )}
        </div>
      </Link>
      <BookmarkBtn
        onClickBookmark={handleClickBookmark}
        isBookmark={isCurrentBookmark}
      />
    </article>
  );
}

export default PlaceCard;
