import ChipBtn from '../atoms/ChipBtn';

export interface ChipMenuData {
  label: string;
  status: boolean;
}

interface ChipMenuProps {
  list: ChipMenuData[];
}

function ChipMenu({ list }: ChipMenuProps) {
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>
            <ChipBtn label={item.label} ispress={item.status} />
          </li>
        );
      })}
    </ul>
  );
}

export default ChipMenu;
