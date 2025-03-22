import supabase from '@/lib/supabase';
import { useEffect, useState } from 'react';
import ReviewCard from '../molecules/ReviewCard';
import ListFilter from '../molecules/ListFilter';

interface Review {
  id: string;
  created_at: Date;
  title: string;
  content: string;
  user_id: string;
}

function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLatest, setIsLatest] = useState(true);
  const [monthFilter, setMonthFilter] = useState<string>(new Date().toString());

  const getReviews = async () => {
    try {
      const result = await supabase.from('review').select('*');

      if (result.error) {
        throw new Error();
      }

      setReviews(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getReviews();
  }, []);

  return (
    <section>
      <h2 className="sr-only">리뷰 목록</h2>
      <ListFilter
        monthFilter={monthFilter}
        latest={isLatest}
        setMonthFilter={setMonthFilter}
        setLatest={setIsLatest}
      />
      <ul className="py-6 px-4 flex flex-col gap-3">
        {reviews.map((item) => {
          return (
            <ReviewCard
              key={item.id}
              content={item.content}
              title={item.title}
              starRate={'5'}
              profileImg={''}
              reviewImg={''}
              writer={item.user_id}
              date={'25년 6월 22일'}
              linkTo={`/${item.id}`}
              counts={[0, 0]}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ReviewList;
