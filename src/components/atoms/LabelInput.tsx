import { tm } from '@/utils/tw-merge';
import { ComponentProps, useId } from 'react';

type LabelInputProps = ComponentProps<'input'> & {
  label: string;
  
  containerClassName: string;
};

function LabelInput({
  label,
  containerClassName,
  ...inputProps
}: LabelInputProps) {
  const id = useId();

  return (
    <div role="group" className={tm('flex flex-col gap-1', containerClassName)}>
      <label
        htmlFor={id}
        className="self-start label-sm text-contents-content-secondary"
      >
        {label}
      </label>
      <input
        id={id}
        className="px-4 py-3 bg-gray-50 rounded-xs text-contents-content-primary placeholder:text-contents-content-tertiary"
        {...inputProps}
      />
    </div>
  );
}

export default LabelInput;
