import Divider from '../atoms/Divider';
import BottomSheet from '../molecules/BottomSheet';
import PlaceCard from '../molecules/PlaceCard';

function PlacePage() {
  return (
    <section>
      <BottomSheet>
        <ul className="flex flex-col gap-4">
          <PlaceCard
            name="그라운드 시소 서촌"
            type="full"
            address="서울시 종로구 어쩌구"
            linkTo="/my"
            img=""
            isBookmark={false}
          />
          <Divider />
          <PlaceCard
            name="그라운드 시소 서촌"
            type="full"
            address="서울시 종로구 어쩌구"
            linkTo="/my"
            img=""
            isBookmark={false}
          />
          <Divider />
          <PlaceCard
            name="그라운드 시소 서촌"
            type="full"
            address="서울시 종로구 어쩌구"
            linkTo="/my"
            img=""
            isBookmark={false}
          />
          <Divider />
          <PlaceCard
            name="그라운드 시소 서촌"
            type="full"
            address="서울시 종로구 어쩌구"
            linkTo="/my"
            img=""
            isBookmark={false}
          />
          <Divider />
          <PlaceCard
            name="그라운드 시소 서촌"
            type="full"
            address="서울시 종로구 어쩌구"
            linkTo="/my"
            img=""
            isBookmark={false}
          />
          <Divider />
          <PlaceCard
            name="그라운드 시소 서촌"
            type="full"
            address="서울시 종로구 어쩌구"
            linkTo="/my"
            img=""
            isBookmark={false}
          />
        </ul>
      </BottomSheet>
    </section>
  );
}

export default PlacePage;
