import { Dispatch, SetStateAction } from 'react';
import DateSelector from '../atoms/DateSelector';
import LatestToggle from '../atoms/LatestToggle';

interface ListFilterProps {
  latest: boolean;
  monthFilter: string;
  setMonthFilter: Dispatch<SetStateAction<string>>;
  setLatest: Dispatch<SetStateAction<boolean>>;
}

function ListFilter({
  monthFilter,
  setMonthFilter,
  latest,
  setLatest,
}: ListFilterProps) {
  return (
    <section className="flex flex-row justify-between bg-gray-50 px-4 py-3">
      <DateSelector setMonthFilter={setMonthFilter} monthFilter={monthFilter} />

      <LatestToggle value={latest} setValue={setLatest} />
    </section>
  );
}

export default ListFilter;
