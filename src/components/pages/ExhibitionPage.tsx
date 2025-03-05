import ChipMenu from '../molecules/ChipMenu';
import ExhibitionList from '../organisms/ExhibitionList';

const categoryList = ['전체', '지역별', '무료전시', '연령대별', '마감임박'];
const regionList = ['전체', '서울', '강원도', '부산', '타지역'];

function ExhibitionPage() {
  return (
    <section>
      ExhibitionPage
      <ChipMenu list={categoryList} size={'medium'} />
      <ChipMenu list={regionList} size={'small'} />
      <ExhibitionList />
    </section>
  );
}

export default ExhibitionPage;
