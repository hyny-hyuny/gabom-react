import ProfileCard from '../organisms/ProfileCard';
import TabNav from '../molecules/TabNav';

function MyPage() {
  return (
    <section>
      <ProfileCard img={''} userName={'조구미'}  />
      <TabNav />
    </section>
  );
}

export default MyPage;
