import ExhibitionCard from './ExhibitionCard';

function ExhibitionList() {
  return (
    <section className="px-custom-6 flex flex-col gap-custom-8 mt-custom-5">
      <ExhibitionCard state="전시중" visitorReviews={34}>
        소행성이 빛을 내는 방법
      </ExhibitionCard>
      <ExhibitionCard state="전시 종료" visitorReviews={34}>
        전시 2
      </ExhibitionCard>
      <ExhibitionCard state="전시 예정" visitorReviews={34}>
        전시 14
      </ExhibitionCard>
    </section>
  );
}

export default ExhibitionList;
