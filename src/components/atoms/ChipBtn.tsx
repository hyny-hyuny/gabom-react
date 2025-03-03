import { tm } from '@/utils/tw-merge';

interface ChipTypes {
  label: string;
  isPress: boolean;
  size?: string;
}

function ChipBtn({ label = '이름', isPress, size }: ChipTypes) {
  const chipMedium =
    'block border-1 px-custom-6 py-custom-3 border-gray-100 rounded-[22px] bg-white';
  const chipMediumSelected = 'border-tertiary text-tertiary';
  const chipSmall = 'label-sm';
  const chipSmallSelected =
    'text-tertiary after:block after:content-[""] after:w-1 after:h-1 after:bg-primary after:rounded-3xs relative after:absolute after:top-0 after:-right-1';

  const isSelected = !!isPress;

  return (
    <button
      type="button"
      className={tm(
        'cursor-pointer',
        size === 'medium' ? chipMedium : size === 'small' ? chipSmall : '',
        isSelected && size === 'medium' && chipMediumSelected,
        isSelected && size === 'small' && chipSmallSelected
      )}
      aria-pressed={isPress}
    >
      {label}
    </button>
  );
}

export default ChipBtn;
