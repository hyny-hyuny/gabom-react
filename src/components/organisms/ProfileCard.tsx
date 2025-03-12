import { SummaryList } from '@/types/mySummary';
import Button from '../atoms/Button';
import MySummary from '../molecules/MySummary';
import MemberLevelTag from '../atoms/MemberLevelTag';
import IconBtn from '../atoms/IconBtn';
import IconPencil from '../../assets/pencil.svg?react';

interface ProfileCard {
  img: string;
  userName: string;
}

const summaryList: SummaryList = [
  { label: '리뷰', count: 4 },
  { label: '방문한 전시', count: 11 },
  { label: '사진 리뷰', count: 1 },
];

function ProfileCard({ img, userName }: ProfileCard) {
  return (
    <article className="flex flex-col py-4 px-3 bg-secondary rounded-md gap-6">
      <div role="group" className="flex flex-row gap-3">
        <div className="min-w-16 max-w-16 max-h-16 min-h-16 rounded-sm bg-gray-100 border-2 border-white overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="프로필 사진"
          />
        </div>
        <p className="w-full">
          <MemberLevelTag level={3} />
          <h3 className="mt-1 heading-md">{userName}</h3>
        </p>
        <IconBtn className="self-baseline bg-white text-tertiary p-1 min-w-8 min-h-8">
          <IconPencil className='min-w-5 min-h-5' width={20} height={20} />
        </IconBtn>
      </div>
      <MySummary summaryList={summaryList} />
      <Button icon="review" isLink={true} isFilled={true}>
        리뷰쓰기
      </Button>
    </article>
  );
}

export default ProfileCard;
