import { tm } from '@/utils/tw-merge';
import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  children?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  label?: string;
  color?: string;
  isMore?: boolean;
  isFilled?: boolean;
  isDisabled?: boolean;
  customClass?: string;
  onClick?: () => void;
};

function Button({
  children,
  label = '',
  color = '',
  isMore = false,
  isFilled = false,
  isDisabled = false,
  customClass = '',
  onClick,
}: ButtonProps) {
  // 더보기, 리뷰쓰기, 예약하기, 로그인, 다음, 전시 더보기, 사진 추가하기 등

  const defaultClass = `rounded-2xs flex gap-custom-1 justify-center items-center cursor-pointer disabled:bg-gray-50 disabled:text-gray-300 ${customClass}`;

  const getButtonClass = () =>
    tm(
      defaultClass,
      // 노란색 fill 버튼
      color === 'primary'
        ? `w-full h-11 bg-primary text-content-primary disabled:bg-gray-100 disabled:text-gray-400 label-md`
        : // 보라색 fill 버튼
          isFilled === true && color === 'tertiary'
          ? `w-full h-11  bg-tertiary text-white disabled:bg-gray-200 label-md`
          : // 보라색 line 버튼
            isFilled === false && color === 'tertiary'
            ? `w-full h-11 bg-white text-tertiary border-1 border-tertiary disabled:text-gray-200 disabled:bg-gray-50 disabled:border-gray-200 label-md`
            : // default 버튼
              `w-fit bg-white text-content-primary`,
      // 더보기 버튼
      isMore
        ? 'w-full h-8 border-1 border-gray-200 text-tertiary label-sm disabled:text-gray-200 disabled:bg-gray-50'
        : '',
      customClass
    );

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={tm(getButtonClass())}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
