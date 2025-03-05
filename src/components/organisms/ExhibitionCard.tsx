import Badge from '../atoms/Badge';
import ImageField from '../atoms/ImageField';
import Tag from '../atoms/Tag';

interface ExhibitionProps {
  children: string;
  state: string;
  visitorReviews: number;
}

function ExhibitionCard({ children, state, visitorReviews }: ExhibitionProps) {
  return (
    <article className="relative flex items-center gap-custom-3">
      <div className="order-1 h-[138px] flex flex-col justify-between items-start flex-1">
        <strong>{children}</strong>
        <Badge>{state}</Badge>
        <Tag emoji="🗓️" label="2024.10.02~2024.12.28" />
        <Tag emoji="📍" label="갤러리헬렌에이" />
        <Tag emoji="👥" label="모든 연령 관람 가능" />
        <p className="paragraph-xs text-gray-500">
          방문자 리뷰 {visitorReviews}
        </p>
      </div>
      <ImageField width={'6.25rem'} height={'8.625rem'} />
    </article>
  );
}

export default ExhibitionCard;
