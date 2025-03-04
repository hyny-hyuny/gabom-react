import ReviewCard from '../organisms/ReviewCard';

function ReviewPage() {
  return (
    <section>
      <ReviewCard
        title="< 소행성이 빛을 내는 방법>전시를 다녀왔습니다. 두 줄 이상이 되면 ellipse 되나요????"
        content="진짜 맨날 근처오면 와서 4-5개씩은 사가는 곳입니다. 비건디저트 특유의 향이 안나서 더 좋아요! 세 줄 이상이 들어가면 "
        starRate="4"
        profileImg=""
        reviewImg=""
        writer="soohyn"
        date="2025. 4. 1"
        counts={[1, 0]}
      />
    </section>
  );
}

export default ReviewPage;
