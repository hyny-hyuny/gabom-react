import { tm } from '@/utils/tw-merge';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';

export interface PopoverMenuProps {
  review?: { id: string };
}

function PopoverMenu({ review }: PopoverMenuProps) {
  const popoverList: string[] = ['수정하기', '삭제하기'];

  return (
    <div
      role="menu"
      className={tm(
        'min-w-25 max-w-[200px] absolute top-[110%] right-0 overflow-hidden rounded-2xs shadow-low'
      )}
    >
      <ul className={tm('flex flex-col gap-[1px] bg-primary text-center')}>
        {popoverList.map((item, index) => {
          let list;
          if (item === '삭제하기') {
            list = (
              <Button
                customClass={tm(
                  `w-full bg-transparent py-custom-3 px-custom-4`,
                  'text-red-500'
                )}
                label={item}
              ></Button>
            );
          } else {
            list = (
              <LinkButton
                customClass={tm(
                  `w-full bg-transparent py-custom-3 no-underline px-custom-4`
                )}
                label={item}
                pathName={review?.id ? `/review/edit/${review.id}` : '#'}
              ></LinkButton>
            );
          }

          return (
            <li
              key={index}
              className="flex justify-center items-center bg-white whitespace-nowrap"
            >
              {list}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PopoverMenu;
