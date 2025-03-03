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
  // 리스트 렌더링 할 떄 필터역할하는 chipmenu

  console.log(list);
  // console.log(size);

  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <ChipBtn label={item.label} isPress={item.status} size={size} />
          </li>
        );
      })}
    </ul>
  );
}

export default ChipMenu;
