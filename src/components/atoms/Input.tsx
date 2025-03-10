import { tm } from '@/utils/tw-merge';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  label: string;
};

function Input({ label, className, ...inputProps }: InputProps) {
  return (
    <label className="flex px-4  border-[1px] border-contents-content-tertiary rounded-xs">
      <span className="sr-only">{label} 입력 창</span>
      <input
        style={{ outline: 'none' }}
        className={tm(
          'w-full py-3 label-md text-contents-content-primary placeholder:text-contents-content-tertiary',
          className
        )}
        {...inputProps}
      />
    </label>
  );
}

export default Input;
