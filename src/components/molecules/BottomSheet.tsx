import { ComponentProps, useState } from 'react';

type BottomSheetProps = ComponentProps<'section'> & {};

function BottomSheet({ children }: BottomSheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="h-full">
      <section className={`w-full rounded-t-md absolute h-10/12 drop-shadow-md bg-white transition-all ${isOpen ? 'top-1/12':'top-9/12'} hidden-scroll-bar`}>
        <button type='button' onClick={handleClick} className="flex w-full justify-center p-4">
          <div className="bg-gray-100 w-[6.25rem] h-[0.3125rem] rounded-2xl "></div>
        </button>
        <main className="px-4 pt-4 pb-20 overflow-y-scroll h-full ">{children}</main>
      </section>
    </div>
  );
}

export default BottomSheet;
