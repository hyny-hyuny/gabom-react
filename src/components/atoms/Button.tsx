import { tm } from '@/utils/tw-merge';
import IconPlus from '@/assets/plus.svg?react';
import IconReview from '@/assets/review.svg?react';
import IconTime from '@/assets/time.svg?react';
import IconAddPhoto from '@/assets/addPhoto.svg?react';
import { Link } from 'react-router';

interface ButtonProps {
  children: string;
  icon?: string;
  color?: string;
  isMore?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  isLink?: boolean;
}

function Button({
  children,
  icon = '',
  isMore,
  color = '',
  isFilled,
  isDisabled,
  isLink,
}: ButtonProps) {
  // 더보기, 리뷰쓰기, 예약하기, 로그인, 다음, 전시 더보기, 사진 추가하기 등

  const defaultClass =
    'w-full rounded-2xs flex gap-custom-1 justify-center items-center cursor-pointer disabled:bg-gray-50 disabled:text-gray-300';

  if (isMore) {
    return (
      <button
        type="button"
        disabled={isDisabled}
        className={tm(
          defaultClass,
          `h-8 label-sm border-1 border-gray-200 text-tertiary label-sm disabled:text-gray-200 disabled:bg-gray-50`
        )}
      >
        {children}
        <IconPlus
          width={24}
          height={24}
          className="fill-gray-200"
          aria-hidden="true"
        />
      </button>
    );
  } else if (isLink) {
    return (
      <Link
        // 임시 경로
        to={isDisabled ? '#' : '/pagename'}
        aria-disabled={isDisabled}
        className={tm(
          defaultClass,
          'label-md h-11',
          isFilled && color === 'tertiary'
            ? `bg-tertiary text-white ${isDisabled ? 'bg-gray-200' : ''}`
            : !isFilled && color === 'tertiary'
              ? `bg-white text-tertiary border-1 border-tertiary ${isDisabled ? 'text-gray-200 bg-gray-50 border-gray-200' : ''}`
              : `bg-white text-content-primary ${isDisabled ? 'text-gray-200 bg-gray-50' : ''}`
        )}
      >
        {icon === 'review' && (
          <IconReview width={24} height={24} aria-hidden="true" />
        )}
        {icon === 'time' && (
          <IconTime width={24} height={24} aria-hidden="true" />
        )}
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type="button"
        disabled={isDisabled}
        className={tm(
          defaultClass,
          'label-md h-11',
          color === 'primary'
            ? 'bg-primary text-content-primary disabled:bg-gray-100 disabled:text-gray-400'
            : isFilled && color === 'tertiary'
              ? 'bg-tertiary text-white  disabled:bg-gray-200'
              : !isFilled && color === 'tertiary'
                ? 'bg-white text-tertiary border-1 border-tertiary disabled:text-gray-200 disabled:bg-gray-50 disabled:border-gray-200'
                : ' bg-white text-content-primary'
        )}
      >
        {icon === 'photo' && (
          <IconAddPhoto width={24} height={24} aria-hidden="true" />
        )}
        {children}
      </button>
    );
  }
}

export default Button;
