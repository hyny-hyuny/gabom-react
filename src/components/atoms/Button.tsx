import { tm } from '@/utils/tw-merge';
import IconPlus from '@/assets/plus.svg?react';

interface ButtonProps {
  children: string;
  icon?: string;
  color?: string;
  isMore?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
}

function Button({
  children,
  // icon = '',
  isMore = false,
  color = '',
  isFilled,
  isDisabled = false,
}: ButtonProps) {
  // 더보기, 리뷰쓰기, 예약하기, 로그인, 다음 등등

  // 아이콘
  // time, plus, review, add-photo

  const defaultClass =
    'w-full rounded-2xs flex gap-custom-1 justify-center items-center cursor-pointer';

  return isMore ? (
    <button
      type="button"
      // disabled
      className={tm(
        defaultClass,
        `h-8 label-sm border-1 border-gray-200 text-tertiary label-sm disabled:text-gray-200 disabled:bg-gray-50`
      )}
    >
      {children}
      <IconPlus width={24} height={24} className="fill-gray-200" />
    </button>
  ) : (
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
      {children}
    </button>
  );
}

export default Button;
