import { tm } from '@/utils/tw-merge';
import Button from '../atoms/Button';
import LinkButton from '../atoms/LinkButton';

function PopoverMenu() {
  const popoverList: string[] = ['수정하기', '삭제하기'];

  return (
    <div className={tm('w-25 bg-green-400')}>
      <ul className={tm('flex flex-col gap-[1px] bg-primary rounded-2xs')}>
        {popoverList.map((item, index) => {
          console.log(item);
          console.log(item === '삭제하기');

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
                pathName=""
              ></LinkButton>
            );
          }

          return (
            <li
              key={index}
              className="flex justify-center items-center bg-white"
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
