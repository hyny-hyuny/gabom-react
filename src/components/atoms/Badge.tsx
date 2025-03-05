import { tm } from '@/utils/tw-merge';

interface BadgeProps {
  children: string;
}

function Badge({ children }: BadgeProps) {
  return (
    <p
      className={tm(
        'label-sm px-custom-2 py-0.5 rounded-3xs inline absolute top-custom-1 left-custom-1',
        children === '전시중'
          ? 'bg-green'
          : children === '전시 종료'
            ? 'bg-gray-300 text-white'
            : 'bg-primary'
      )}
      aria-label={children}
    >
      {children}
    </p>
  );
}

export default Badge;
