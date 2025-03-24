import ProfileCard from '../organisms/ProfileCard';
import TabNav from '../molecules/TabNav';
import { useSearchParams } from 'react-router';
import { useMemo } from 'react';
import { MyPageTabSearchParam } from '@/types/myPage';
import ReviewList from '../organisms/ReviewList';
import ReservationList from '../organisms/ReservationList';
import PlaceList from '../organisms/PlaceList';
import BookmarkList from '../organisms/BookmarkList';

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
        return <PlaceList />;
      case 'bookmark':
        return <BookmarkList />;
      default:
        return <div>error</div>;
    }
  }, [searchParams]);

  return (
    <section>
      <ProfileCard img={''} userName={'조구미'} />
      <TabNav searchParams={searchParams} setSearchParams={setSearchParams} />
      {renderMy}
    </section>
  );
}

export default MyPage;
