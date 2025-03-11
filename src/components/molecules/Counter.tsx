import { Dispatch, SetStateAction } from 'react';
import IconBtn from '../atoms/IconBtn';
import IconPlus from '../../assets/plus.svg?react';
import IconMinus from '../../assets/minus.svg?react';

interface CounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  minCount?: number;
  maxCount?: number;
}

function Counter({ count, setCount, minCount = 0, maxCount }: CounterProps) {
  const handleIncrease = () => {
    setCount((prev) => {
      if (!!maxCount && maxCount > prev) return prev + 1;
      return maxCount ?? prev + 1;
    });
  };

  const handleDecrease = () => {
    setCount((prev) => {
      if (minCount < prev) return prev - 1;
      return minCount;
    });
  };

  const isDisabledIncrease = !!maxCount && count >= maxCount;
  const isDisabledDecrease = count <= minCount;

  return (
    <div role="group" aria-label='인원 카운터' className="flex flex-row gap-3 items-center">
      <IconBtn
        aria-label="감소"
        onClick={handleDecrease}
        aria-disabled={isDisabledDecrease}
        disabled={isDisabledDecrease}
      >
        <IconMinus width={24} height={24} />
      </IconBtn>

      <output name="사람 수" className="px-4 py-1 rounded-2xs bg-gray-50 --label-md">
        {count}
      </output>


      <IconBtn
        aria-label="증가"
        onClick={handleIncrease}
        aria-disabled={isDisabledIncrease}
        disabled={isDisabledIncrease}
      >
        <IconPlus width={24} height={24} />
      </IconBtn>
    </div>
  );
}

export default Counter;
