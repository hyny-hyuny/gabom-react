import { Link } from 'react-router';
import { tm } from '@/utils/tw-merge';

interface LinkButtonProps extends React.ComponentProps<'a'> {
  children?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  label?: string;
  color?: string;
  isFilled?: boolean;
  isDisabled?: boolean;
  customClass?: string;
}

function LinkButton({
  children,
  label = '',
  color = '', // 'primary' | 'tertiary'
  isFilled = false,
  isDisabled = false,
  customClass = '',
}: LinkButtonProps) {
  const defaultClass = `rounded-2xs flex gap-custom-1 justify-center items-center cursor-pointer ${isDisabled ? 'bg-gray-50 text-gray-300' : ''} ${customClass}`;

  return (
    <Link
      // 임시 경로
      to={isDisabled ? '/' : '/pagename'}
      aria-disabled={isDisabled}
      className={tm(
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
                `w-fit text-content-primary underline`
      )}
    >
      {children}
      {label}
    </Link>
  );
}

export default LinkButton;
