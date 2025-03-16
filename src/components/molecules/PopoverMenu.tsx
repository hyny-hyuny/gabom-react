import { tm } from '@/utils/tw-merge';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';

interface PopoverMenuProps {
  isOpened: boolean;
}

function PopoverMenu({ isOpened = false }: PopoverMenuProps) {
  const popoverList: string[] = ['수정하기', '또 다른 메뉴 리스트', '삭제하기'];

  return (
    <div
      role="menu"
      className={tm(
        'min-w-25 max-w-[200px] absolute top-[110%] right-0 overflow-hidden rounded-2xs shadow-low',
        isOpened ? 'block' : 'hidden'
      )}
    >
      <ul className={tm('flex flex-col gap-[1px] bg-primary text-center')}>
        {popoverList.map((item, index) => {
          let list;
          if (item === '삭제하기') {
            list = (
              <Button
                customClass={tm(`bg-transparent py-custom-3`, 'text-red-500')}
                label={item}
              ></Button>
            );
          } else {
            list = (
              <LinkButton
                customClass={tm(`bg-transparent py-custom-3 no-underline`)}
                label={item}
                pathName="#"
              ></LinkButton>
            );
          }

          return (
            <li
              key={index}
              className="flex justify-center items-center bg-white px-custom-4 whitespace-nowrap"
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
