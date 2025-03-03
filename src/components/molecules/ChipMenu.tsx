import { tm } from '@/utils/tw-merge';
import ChipBtn from '../atoms/ChipBtn';

export interface ChipMenuData {
  label: string;
  status: boolean;
}

interface ChipMenuProps {
  list: ChipMenuData[];
  size: 'medium' | 'small';
}

function ChipMenu({ list, size }: ChipMenuProps) {
  return (
    <div className={tm('overflow-x-auto')}>
      <ul
        className={tm(
          'w-max h-[50px] px-custom-6 flex items-center',
          size === 'medium' ? 'gap-custom-1' : 'gap-custom-6'
        )}
      >
        {list.map((item, index) => {
          return (
            <li key={index} className="shrink-0">
              <ChipBtn label={item.label} isPress={item.status} size={size} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChipMenu;
