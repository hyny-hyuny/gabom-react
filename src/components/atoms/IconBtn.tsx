import { tm } from '@/utils/tw-merge';
import { ComponentProps } from 'react';

type IconBtnProps = ComponentProps<'button'> & {};

function IconBtn({
  children,
  type = 'button',
  className,
  ...buttonProps
}: IconBtnProps) {
  return (
    <button
      type={type}
      className={tm(
        'flex items-center justify-center cursor-pointer p-1 rounded-2xs bg-primary disabled:bg-gray-100  text-contents-content-primary disabled:text-gray-400',
        className
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default IconBtn;
