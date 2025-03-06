import ExhibitionCard from '../molecules/ExhibitionCard';

export interface ExhibitionDataType {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  place: string;
  reviews: number;
  ageRange: 'all' | 'kids' | '12' | '15' | '19';
  status: string; // '전시중' | '전시 종료' | '전시 예정'
  isBookmark: boolean;
}

function ExhibitionList() {
  const ExhibitionData: ExhibitionDataType[] = [
    {
      id: 1,
      title: '소행성이 빛을 내는 방법',
      startDate: new Date('2024-03-01'),
      endDate: new Date('2024-12-30'),
      status: '전시 종료',
      reviews: 35,
      place: '갤러리 헬렌에이',
      ageRange: 'all',
      isBookmark: true,
    },
    {
      id: 2,
      title: 'NOWHERE',
      startDate: new Date('2025-03-02'),
      endDate: new Date('2025-03-27'),
      status: '전시 예정',
      reviews: 23,
      place: '룩인사이드갤러리',
      ageRange: '12',
      isBookmark: false,
    },
    {
      id: 3,
      title: 'Unspoken Words:말하지 않은 단어',
      startDate: new Date('2025-02-24'),
      endDate: new Date('2025-03-30'),
      status: '전시중',
      reviews: 56,
      place: '스페이시움',
      ageRange: '15',
      isBookmark: true,
    },
  ];

  return (
    <section className="px-custom-6 flex flex-col gap-custom-8 my-custom-5">
      <ExhibitionCard
        key={ExhibitionData[0].id}
        place={ExhibitionData[0].place}
        isBookmark={ExhibitionData[0].isBookmark}
        size="small"
      >
        {ExhibitionData[0].title}
      </ExhibitionCard>
      {ExhibitionData.map((item) => {
        const formatDate = (date: Date) => {
          return date
            .toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\. /g, '.');
        };

        const period = `${formatDate(item.startDate)} ~ ${formatDate(item.endDate)}`;

        let ageMessage;
        switch (item.ageRange) {
          case 'all':
            ageMessage = '모든 연령 관람 가능';
            break;
          case 'kids':
            ageMessage = '아동 관람가';
            break;
          case '12':
            ageMessage = '12세 이상 관람 가능';
            break;
          case '15':
            ageMessage = '15세 이상 관람 가능';
            break;
          case '19':
            ageMessage = '청소년 관람 불가';
            break;
        }

        return (
          <ExhibitionCard
            key={item.id}
            status={item.status}
            reviews={item.reviews}
            place={item.place}
            ageRange={ageMessage}
            period={period}
            isBookmark={item.isBookmark}
          >
            {item.title}
          </ExhibitionCard>
        );
      })}
    </section>
  );
}

export default ExhibitionList;
