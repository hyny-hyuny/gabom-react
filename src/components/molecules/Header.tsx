import { Link } from 'react-router';
import Logo from '@/assets/logo/horizontal-md.svg?react';
import { tm } from '@/utils/tw-merge';
import BackBtn from '../atoms/BackBtn';

interface HeaderProps {
  depth?: boolean;
}

function Header({ depth = false }: HeaderProps) {
  return (
    <header
      className={tm(
        'w-full h-11 flex items-center justify-center px-custom-6 fixed top-0 min-w-[20rem] max-w-[31.25rem] bg-white'
      )}
    >
      {depth ? (
        <>
          <h1 className="sr-only">가봄</h1>
          <BackBtn />
        </>
      ) : (
        <Link to={'/exhibition'}>
          <h1>
            <span className="sr-only">가봄</span>
            <Logo width={60} />
          </h1>
        </Link>
      )}
    </header>
  );
}

export default Header;
