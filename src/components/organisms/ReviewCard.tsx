import ImageField from '../atoms/imageField';
import Tag from '../atoms/Tag';

interface ReviewCardProps {
  title: string;
  content: string;
  writer: string;
  date: string;
  counts: number[];
  starRate: string;
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
  counts = [0, 0],
}: ReviewCardProps) {
  const [adults, kids] = counts;
  const countText = `${adults > 0 ? `성인 ${adults}명` : ''}${adults > 0 && kids > 0 ? ` • ` : ''}${kids ? `어린이 ${kids}명` : ''}`;

  return (
    <article className="bg-white p-4 rounded-sm flex flex-col items-center">
      <h2 className="text-label-md font-medium text-contents-content-primary w-48 ellipsis-2">
        {title}
      </h2>

      <div className="flex items-center gap-2 mt-1">
        <ImageField
          width="1.375rem"
          height="1.375rem"
          src={profileImg}
          alt="작성자 프로필"
        />

        <span aria-label="리뷰 작성자" className="text-tertiary text-xs">
          {writer}
        </span>

        <div className="w-1 h-1 bg-gray-100 rounded-full"></div>

        <time
          className="text-xs text-contents-content-secondary"
          dateTime={date}
        >
          {date}
        </time>
      </div>

      <div className="flex flex-row gap-4 mt-4">
        <div className="flex flex-col gap-3">
          <p className="ellipsis-3 overflow-ellipsis text-xs/relaxed text-contents-content-secondary">
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
    </article>
  );
}

export default ReviewCard;
