import { tm } from '@/utils/tw-merge';
import { ComponentProps, useId, useState } from 'react';
import EyeOffIcon from '../../assets/eye-off.svg?react';
import EyeOnIcon from '../../assets/eye-on.svg?react';

type LabelInputProps = ComponentProps<'input'> & {
  label: string;
  containerClassName?: string;
  message?: string;
  isError?: boolean;
};

function LabelInput({
  label,
  containerClassName,
  message,
  isError,
  type,
  ...inputProps
}: LabelInputProps) {
  const id = useId();
  const [isMasking, setIsMasking] = useState<boolean>(true);

  const customType = type === 'password' && !isMasking ? 'text' : type;

  const handleClickMaskingButton = () => {
    setIsMasking((prev) => !prev);
  };

  return (
    <div role="group" className={tm('flex flex-col gap-1', containerClassName)}>
      <label
        htmlFor={id}
        className="self-start label-sm text-contents-content-secondary"
      >
        {label}
      </label>
      <div role="group" className="flex gap-1 px-4 py-3 bg-gray-50 rounded-xs">
        <input
          id={id}
          type={customType}
          className="w-full text-contents-content-primary placeholder:text-contents-content-tertiary"
          {...inputProps}
        />
        {type === 'password' && (
          <button
            type="button"
            aria-label={
              customType === 'password' ? '비밀번호 숨기기' : '비밀번호 표시'
            }
            onClick={handleClickMaskingButton}
          >
            {customType === 'password' ? <EyeOnIcon /> : <EyeOffIcon />}
          </button>
        )}
      </div>
      <span className="text-info-error paragraph-xs">
        {isError ? message : ''}
      </span>
    </div>
  );
}

export default LabelInput;
