import ChipMenu, { ChipMenuData } from '../molecules/ChipMenu';

const categoryList: ChipMenuData[] = [
  { label: '전체', status: true },
  { label: '지역별', status: false },
  { label: '무료전시', status: false },
  { label: '연령대별', status: false },
  { label: '마감임박', status: false },
];

const regionList: ChipMenuData[] = [
  { label: '전체', status: true },
  { label: '서울', status: false },
  { label: '강원도', status: false },
  { label: '부산', status: false },
  { label: '타지역', status: false },
];

function ExhibitionPage() {
  return (
    <section>
      ExhibitionPage
      <ChipMenu list={categoryList} size={'medium'} />
      <ChipMenu list={regionList} size="small" />
      {/* <ExhibitionList /> */}
    </section>
  );
}

export default ExhibitionPage;
