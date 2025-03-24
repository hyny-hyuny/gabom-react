import { useEffect, useState } from 'react';
import ChipBtn from '../atoms/ChipBtn';
import supabase from '@/lib/supabase';
import { getUser } from '@/lib/auth';
import ExhibitionCard from '../molecules/ExhibitionCard';
import PlaceCard from '../molecules/PlaceCard';

type BookmarkType = 'exhibit' | 'place';

interface Bookmark {
  id: string;
  created_at: string;
  exhibit_id: string;
  place_id: string;
  type: BookmarkType;
  user_id: string;
}

function BookmarkList() {
  const [selected, setSelected] = useState<BookmarkType>('exhibit');
  const [data, setData] = useState<Bookmark[]>([]);

  const handleOnToggle = (index: number) => {
    setSelected(index === 1 ? 'exhibit' : 'place');
  };

  const getBookmark = async () => {
    try {
      const user = await getUser();
      if (!user) return;
      const response = await supabase
        .from('bookmark')
        .select('*')
        // .eq('user_id', user.id)
        .eq('type', selected);

      if (response.error) throw new Error();

      console.log(response);

      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getBookmark();
  }, [selected]);

  const exhibitMap = data.map((item) => {
    return (
      <ExhibitionCard
        key={item.id}
        reviews={0}
        place={'place'}
        ageRange=""
        period=""
        size=""
        isBookmark
      >
        hi
      </ExhibitionCard>
    );
  });

  const placeMap = data.map((item) => {
    return (
      <PlaceCard
        key={item.id}
        linkTo=""
        address=""
        isBookmark={true}
        type="full"
        img=""
        name={item.place_id}
      />
    );
  });

  return (
    <section>
      <nav className="px-4 py-2 flex flex-row gap-1">
        <ChipBtn
          isPressed={selected === 'exhibit'}
          index={1}
          size="medium"
          onToggle={handleOnToggle}
        >
          전시
        </ChipBtn>
        <ChipBtn
          isPressed={selected === 'place'}
          index={2}
          size="medium"
          onToggle={handleOnToggle}
        >
          장소
        </ChipBtn>
      </nav>
      <ul className="flex flex-col gap-6 py-3 px-4">{selected === 'exhibit' ? exhibitMap : placeMap}</ul>
    </section>
  );
}

export default BookmarkList;
