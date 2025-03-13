import Button from '../atoms/Button';
// import LinkButton from '../atoms/LinkButton';
import ChipMenu from '../molecules/ChipMenu';
import ExhibitionList from '../organisms/ExhibitionList';
import IconAddPhoto from '@/assets/addPhoto.svg?react';
// import IconTime from '@/assets/time.svg?react';
// import IconReview from '@/assets/review.svg?react';
// import IconEdit from '@/assets/edit.svg?react';
import IconPlus from '@/assets/plus.svg?react';
import PopoverMenu from '../molecules/PopoverMenu';

const categoryList = ['전체', '지역별', '무료전시', '연령대별', '마감임박'];
const regionList = ['전체', '서울', '강원도', '부산', '타지역'];

function ExhibitionPage() {
  const handleClick = () => {
    console.log('버튼 클릭 ');
  };

  return (
    <section>
      ExhibitionPage
      <PopoverMenu />
      <Button
        label="커스텀 일반 버튼"
        customClass="px-2 py-1"
        onClick={handleClick}
      ></Button>
      <Button onClick={handleClick}>
        <IconPlus
          width={24}
          height={24}
          aria-label="전시 더보기"
          className="fill-gray-200"
        />
      </Button>
      <Button
        label="전시 더보기"
        customClass="text-red-400 label-sm"
        onClick={handleClick}
      ></Button>
      <Button
        isFilled={true}
        isMore={true}
        label="전시 더 보기"
        onClick={handleClick}
      >
        <IconPlus
          width={24}
          height={24}
          aria-hidden="true"
          className="fill-gray-200"
        />
      </Button>
      <Button
        isFilled={false}
        color="primary"
        label="로그인"
        onClick={handleClick}
      ></Button>
      <Button
        isFilled={false}
        color="tertiary"
        label="사진 추가하기"
        customClass="flex-row-reverse"
        onClick={handleClick}
      >
        <IconAddPhoto width={24} height={24} aria-hidden="true" />
      </Button>
      <Button
        isFilled={true}
        color="tertiary"
        label="닫기"
        onClick={handleClick}
      ></Button>
      {/* <LinkButton isFilled={false} label="에약하기" color="tertiary">
        <IconTime width={24} height={24} aria-hidden="true" />
      </LinkButton>
      <LinkButton
        label="회원가입하기"
        customClass="label-sm bg-none"
      ></LinkButton>
      <LinkButton label="리뷰쓰기" color="tertiary" isFilled={true}>
        <IconReview aria-hidden="true" />
      </LinkButton>
      <LinkButton customClass="p-1 bg-white">
        <IconEdit aria-label="작성하기" />
      </LinkButton> */}
      <ChipMenu list={categoryList} size={'medium'} />
      <ChipMenu list={regionList} size={'small'} />
      <ExhibitionList />
    </section>
  );
}

export default ExhibitionPage;
