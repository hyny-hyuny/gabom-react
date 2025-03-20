import supabase from '@/lib/supabase';
import { useEffect, useState } from 'react';
import ReviewCard from '../molecules/ReviewCard';

interface Review {
  id: string;
  created_at: Date;
  title: string;
  content: string;
  user_id: string;
}

function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);

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
    <ul className='flex flex-col gap-3'>
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
  );
}

export default ReviewList;
