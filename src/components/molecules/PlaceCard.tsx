import Bookmark from '@/assets/bookmark.svg?react';
import ImageField from '../atoms/ImageField';
import Tag from '../atoms/Tag';
import { useState } from 'react';

type AddressType = 'full' | 'shorcut';

interface PlaceCardProps {
  name: string;
  type: AddressType;
  address: string;
  img: string;
  isBookmark: boolean;
  handleAddBookmark?: (isBookmark: boolean) => void;
}

function PlaceCard({
  name,
  type,
  address,
  img,
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
      <ImageField
        width={isFullType ? '5.25rem' : '4rem'}
        height={isFullType ? '5.25rem' : '4rem'}
        src={img}
        alt={'장소 이미지'}
      />
      <p className="flex flex-col ml-4 flex-1 gap-1 justify-center items-start text-contents-content-primary">
        <h2 className="font-medium ">{name}</h2>
        {isFullType ? (
          <span className="text-xs mt-">{address}</span>
        ) : (
          <Tag emoji="📍" label={address} />
        )}
      </p>
      <button
        type="button"
        onClick={handleClickBookmark}
        className={`cursor-pointer ${isCurrentBookmark ? 'text-primary' : 'text-gray-100'}`}
      >
        <Bookmark width={24} height={24} />
      </button>
    </article>
  );
}

export default PlaceCard;
