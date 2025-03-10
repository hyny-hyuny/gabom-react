import { tm } from '@/utils/tw-merge';
import ChipBtn from '../atoms/ChipBtn';
import { useState } from 'react';

export interface ChipMenuData {
  label: string;
  status: boolean;
}

interface ChipMenuProps {
  list: string[];
  size: 'medium' | 'small';
}

function ChipMenu({ list, size }: ChipMenuProps) {
  const [pressedIndex, setPressedIndex] = useState(0);

  const handleToggle = (pressedIndex: number) => {
    setPressedIndex(pressedIndex);
  };

  return (
    <div className={tm('overflow-x-auto')}>
      <ul
        className={tm(
          'w-max px-custom-6 flex items-center',
          size === 'medium' ? 'gap-custom-1 h-[50px]' : 'gap-custom-6 h-[38px]'
        )}
      >
        {list.map((item, index) => {
          const isPressed = index === pressedIndex;

          return (
            <li key={index} className="shrink-0">
              <ChipBtn
                isPressed={isPressed}
                size={size}
                index={index}
                onToggle={handleToggle}
              >
                {item}
              </ChipBtn>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChipMenu;
