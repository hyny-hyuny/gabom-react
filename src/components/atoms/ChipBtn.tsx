import { tm } from '@/utils/tw-merge';

interface ChipTypes {
  children: string;
  isPressed: boolean;
  size?: string;
  index: number;
  onToggle: (pressedIndex: number) => void;
}

function ChipBtn({ children, isPressed, size, index, onToggle }: ChipTypes) {
  const chipMedium =
    'block border-2 px-custom-6 py-custom-3 border-gray-100 rounded-[22px] bg-white';
  const chipMediumSelected = 'border-tertiary text-tertiary';
  const chipSmallSelected =
    'text-tertiary after:block after:content-[""] after:w-1 after:h-1 after:bg-primary after:rounded-3xs relative after:absolute after:top-0 after:-right-1';

  return (
    <button
      type="button"
      className={tm(
        'cursor-pointer label-sm',
        size === 'medium' ? chipMedium : '',
        isPressed && size === 'medium' && chipMediumSelected,
        isPressed && size === 'small' && chipSmallSelected
      )}
      aria-pressed={true}
      onClick={() => {
        onToggle(index);
      }}
    >
      {children}
    </button>
  );
}

export default ChipBtn;
