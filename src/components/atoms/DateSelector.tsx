import { Dispatch, SetStateAction, useId, useMemo } from 'react';
import DownIcon from '../../assets/down.svg?react';

interface DateSelectorProps {
  monthFilter: string;
  setMonthFilter: Dispatch<SetStateAction<string>>;
}

function DateSelector({ monthFilter, setMonthFilter }: DateSelectorProps) {
  const id = useId();

  const label = useMemo(() => {
    const date = new Date(monthFilter);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}. ${month}`;
  }, [monthFilter]);

  return (
    <label className="flex flex-row items-center relative" htmlFor={id}>
      <span>{label}</span>
      <DownIcon />
      <input
        id={id}
        type="date"
        className="absolute top-0 bottom-0 left-0 right-0 opacity-0"
        value={monthFilter}
        onChange={(e) => setMonthFilter(e.target.value)}
      />
    </label>
  );
}

export default DateSelector;
