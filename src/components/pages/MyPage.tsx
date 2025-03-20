import ProfileCard from '../organisms/ProfileCard';
import TabNav from '../molecules/TabNav';
import { useSearchParams } from 'react-router';
import { useMemo } from 'react';
import { MyPageTabSearchParam } from '@/types/myPage';
import ReviewList from '../organisms/ReviewList';
import ReservationList from '../organisms/ReservationList';

function MyPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const renderMy = useMemo(() => {
    console.log(searchParams.toString());
    switch (
      searchParams.toString().replace('tab=', '') as MyPageTabSearchParam
    ) {
      case 'review':
        return <ReviewList />;
      case 'reservation':
        return <ReservationList />;
      case 'place':
        return;
      case 'bookmark':
        return;
      default:
        return <div>error</div>;
    }
  }, [searchParams]);

  return (
    <section>
      <ProfileCard img={''} userName={'조구미'} />
      <TabNav searchParams={searchParams} setSearchParams={setSearchParams} />
      <div role="group" className="py-6 px-4">
        {renderMy}
      </div>
    </section>
  );
}

export default MyPage;
