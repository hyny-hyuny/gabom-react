import PlaceCard from '../molecules/PlaceCard';

function PlacePage() {
  return (
    <section>
      <PlaceCard
        name="그라운드 시소 서촌"
        type="shorcut"
        address="서울시 종로구 어쩌구"
        img=""
        isBookmark={false}
      />
    </section>
  );
}

export default PlacePage;
