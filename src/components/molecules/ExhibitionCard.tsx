import { Link } from 'react-router';
import Badge from '../atoms/Badge';
import ImageField from '../atoms/ImageField';
import Tag from '../atoms/Tag';

interface ExhibitionCardProps {
  children: string;
  status: string;
  reviews: number;
  place: string;
  age_range: string;
  period: string;
}

function ExhibitionCard({
  children,
  status,
  reviews,
  place,
  age_range,
  period,
}: ExhibitionCardProps) {
  return (
    <Link to={'#'}>
      <article className="relative flex items-center gap-custom-3">
        <div className="order-1 h-[138px] flex flex-col justify-between items-start flex-1">
          <strong>{children}</strong>
          <Badge>{status}</Badge>
          <Tag emoji="🗓️" label={period} />
          <Tag emoji="📍" label={place} />
          <Tag emoji="👥" label={age_range} />
          <p className="paragraph-xs text-gray-500">방문자 리뷰 {reviews}</p>
        </div>
        <ImageField width={'6.25rem'} height={'8.625rem'} />
      </article>
    </Link>
  );
}

export default ExhibitionCard;
