import { Dispatch, SetStateAction, useId } from 'react';

interface LatestToggleProps {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
}

function LatestToggle({ value, setValue }: LatestToggleProps) {
  const id = useId();

  const handleToggle = () => {
    setValue((prev) => !prev);
  };

  return (
    <label className="relative" htmlFor={id}>
      <span className="text-tertiary label-sm">
        {value ? '최신순' : '오래된순'}
      </span>

      <input
        id={id}
        type="checkbox"
        className="sr-only"
        checked={value}
        onChange={handleToggle}
      />
    </label>
  );
}

export default LatestToggle;
