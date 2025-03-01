import ChipBtn from '../atoms/ChipBtn';

export interface ChipMenuData {
  label: string;
  status: boolean;
}

function ChipMenu() {
  const categoryList: ChipMenuData[] = [
    { label: '전체', status: true },
    { label: '지역별', status: false },
    { label: '무료전시', status: false },
    { label: '연령대별', status: false },
    { label: '마감임박', status: false },
  ];

  // 리스트 렌더링 할 떄 필터역할하는 chipmenu

  return (
    <ul>
      {categoryList.map((item, index) => {
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
