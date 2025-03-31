import { Link } from 'react-router';
import ImageField from '../atoms/ImageField';
import Tag from '../atoms/Tag';

import MoreMenu from './MoreMenu';

interface ReviewCardProps {
  title: string;
  content: string;
  writer: string;
  date: string;
  counts: number[];
  starRate: string;
  linkTo: string;
  profileImg?: string;
  reviewImg?: string;
}

function ReviewCard({
  title,
  content,
  starRate,
  profileImg,
  reviewImg,
  writer,
  date,
  linkTo = '/my',
  counts = [0, 0],
}: ReviewCardProps) {
  const [adults, kids] = counts;
  const countText = `${adults > 0 ? `성인 ${adults}명` : ''}${adults > 0 && kids > 0 ? ` • ` : ''}${kids ? `어린이 ${kids}명` : ''}`;

  const hnadleDeleteBtn = () => {
    console.log('삭제 삭제');
  };

  return (
    <article className="relative bg-white p-3 rounded-sm flex flex-col items-center shadow-low">
      <Link to={linkTo} className="flex flex-col items-center">
        <strong className="label-md text-contents-content-primary max-w-[16.25rem] mx-6 ellipsis-2">
          {title}
        </strong>

        <div className="flex items-center gap-2 mt-1">
          <ImageField
            width="1.375rem"
            height="1.375rem"
            src={profileImg}
            alt="작성자 프로필"
          />

          <span
            aria-label="리뷰 작성자"
            className="text-tertiary paragraph-sm break-all"
          >
            {writer}
          </span>

          <div className="w-1 h-1 bg-gray-100 rounded-full"></div>

          <time
            className="paragraph-xs whitespace-nowrap text-contents-content-secondary"
            dateTime={date}
          >
            {date}
          </time>
        </div>

        <div className="flex flex-row gap-4 mt-4 w-full">
          <div className="flex flex-1 flex-col gap-3">
            <p className="ellipsis-3 overflow-ellipsis paragraph-sm text-contents-content-secondary">
              {content}
            </p>

            <div className="flex gap-2">
              <Tag emoji="👥" label={countText} />
              <Tag label={starRate} />
            </div>
          </div>

          <ImageField
            width="4.5rem"
            height="4.5rem"
            src={reviewImg}
            alt="리뷰 썸네일 사진"
          />
        </div>
      </Link>

      <MoreMenu
        customClass="absolute top-3 right-3"
        onDelete={hnadleDeleteBtn}
      />
    </article>
  );
}

export default ReviewCard;
