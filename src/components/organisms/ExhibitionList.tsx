import ExhibitionCard from '../molecules/ExhibitionCard';

export interface ExhibitionDataType {
  id: number;
  // created_at: Date;
  title: string;
  // description: string;
  start_date: Date;
  end_date: Date;
  // detail_img: string;
  // price: number;
  // category_id: string;
  // thumbnail: stirng; // img
  // place_id: number; // Place
  place: string;
  reviews: number;
  age_range: 'all' | 'kids' | '12' | '15' | '19';
  status: string; // '전시중' | '전시 종료' | '전시 예정'
  isBookmark: boolean;
}

function ExhibitionList() {
  const ExhibitionData: ExhibitionDataType[] = [
    {
      id: 1,
      title: '소행성이 빛을 내는 방법',
      start_date: new Date('2024-03-01'),
      end_date: new Date('2024-12-30'),
      status: '전시 종료',
      reviews: 35,
      place: '갤러리 헬렌에이',
      age_range: 'all',
      isBookmark: true,
    },
    {
      id: 2,
      title: 'NOWHERE',
      start_date: new Date('2025-03-02'),
      end_date: new Date('2025-03-27'),
      status: '전시 예정',
      reviews: 23,
      place: '룩인사이드갤러리',
      age_range: '12',
      isBookmark: false,
    },
    {
      id: 3,
      title: 'Unspoken Words:말하지 않은 단어',
      start_date: new Date('2025-02-24'),
      end_date: new Date('2025-03-30'),
      status: '전시중',
      reviews: 56,
      place: '스페이시움',
      age_range: '15',
      isBookmark: true,
    },
  ];

  return (
    <section className="px-custom-6 flex flex-col gap-custom-8 my-custom-5">
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

        const period = `${formatDate(item.start_date)} ~ ${formatDate(item.end_date)}`;

        let age_message;
        switch (item.age_range) {
          case 'all':
            age_message = '모든 연령 관람 가능';
            break;
          case 'kids':
            age_message = '아동 관람가';
            break;
          case '12':
            age_message = '12세 이상 관람 가능';
            break;
          case '15':
            age_message = '15세 이상 관람 가능';
            break;
          case '19':
            age_message = '청소년 관람 불가';
            break;
        }

        return (
          <ExhibitionCard
            key={item.id}
            status={item.status}
            reviews={item.reviews}
            place={item.place}
            age_range={age_message}
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
