import Search from '@/assets/search.svg?react';
import Reset from '@/assets/reset.svg?react';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useId } from 'react';

interface SearchBarProps {
  searchText: string;
  placeholder: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  onSearch?: () => void;
}

function SearchBar({
  placeholder,
  searchText,
  setSearchText,
  onSearch,
}: SearchBarProps) {
  const id = useId();

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleResetButton = () => {
    setSearchText('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSearch?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-[1px] border-gray-50 flex flex-row px-4 py-2 gap-2 rounded-xs"
    >
      <label htmlFor={id} className="flex flex-row flex-1">
        <span className="sr-only">검색창</span>
        <input
          id={id}
          style={{ outline: 'none' }}
          className="w-full label-md text-contents-content-primary placeholder:text-contents-content-tertiary"
          type="text"
          placeholder={placeholder}
          value={searchText}
          onChange={handleChangeSearchText}
        />
      </label>
      {searchText && (
        <button
          type="button"
          onClick={handleResetButton}
          className=" text-contents-content-secondary"
        >
          <Reset width="24" height="24" />
        </button>
      )}
      <button type="submit" className="text-tertiary">
        <Search width="24" height="24" />
      </button>
    </form>
  );
}

export default SearchBar;
