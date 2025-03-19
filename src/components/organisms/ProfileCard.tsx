import { SummaryList } from '@/types/myPage';
import Button from '../atoms/Button';
import MySummary from '../molecules/MySummary';
import MemberLevelTag from '../atoms/MemberLevelTag';
import IconPencil from '../../assets/pencil.svg?react';
import { useNavigate } from 'react-router';
import IconReview from '../../assets/review.svg?react';
import ImageField from '../atoms/ImageField';

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
  const navigate = useNavigate();

  const handleGoToEditProfilePage = () => {
     void navigate('edit');
  };

  const handleGoToWriteReview =() =>{
    void navigate('/review/write');
  }

  return (
    <article className="flex flex-col py-4 px-3 bg-secondary rounded-md gap-6 mx-4 my-6">
      <div role="group" className="flex flex-row gap-3">
      <ImageField width={'4rem'} height={'4rem'} alt={'프로필 사진'} src={img} className="border-2 border-white" />

        <p className="w-full">
          <MemberLevelTag level={3} />
          <strong className="block mt-1 heading-md">{userName}</strong>
        </p>

        <Button
          onClick={handleGoToEditProfilePage}
          customClass="flex self-baseline bg-white text-tertiary p-1 min-w-8 min-h-8"
        >
          <IconPencil className="min-w-5 min-h-5" width={20} height={20} />
        </Button>
      </div>

      <MySummary summaryList={summaryList} />

      <Button customClass='flex-row-reverse w-full p-5' label='리뷰 쓰기' onClick={handleGoToWriteReview} isFilled={true}>
        <IconReview />
      </Button>
    </article>
  );
}

export default ProfileCard;
