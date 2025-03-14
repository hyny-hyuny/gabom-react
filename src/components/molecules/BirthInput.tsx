import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

interface BirthInputProps {
  birth: string;
  setBirth: Dispatch<SetStateAction<string>>;
}

function BirthInput({ birth, setBirth }: BirthInputProps) {
  const defaultYear = birth.slice(0, 4);
  const defaultMonth = birth.slice(4, 6);
  const defaultDay = birth.slice(6, 8);

  const [year, setYear] = useState(defaultYear);
  const [month, setMonth] = useState(defaultMonth);
  const [day, setDay] = useState(defaultDay);

  const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  const handleMonth = (e: ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleDay = (e: ChangeEvent<HTMLInputElement>) => {
    setDay(e.target.value);
  };

  const onBlur =()=>{
    if(!year) { 
      setYear(defaultYear) 
      return
    }

    if(!month) {
      setMonth(defaultMonth)
      return
    }

    if(!day){
      setDay(defaultDay)
      return
    }
    
    setBirth(year + month + day);
  }

  return (
    <div role="group" className={'flex flex-col gap-1 w-full'}>
      <label
        htmlFor={'edit-birth'}
        className="self-start label-sm text-contents-content-secondary"
      >
        생년월일
      </label>
      <div role="group" className="flex flex-row gap-2">
        <input
          id={'edit-birth'}
          type="text"
          value={year}
          onBlur={onBlur}
          onChange={handleYear}
          className="w-full px-4 py-3 bg-gray-50 rounded-xs text-contents-content-primary placeholder:text-contents-content-tertiary"
        />
        <input
          id={'edit-birth'}
          type="text"
          value={month}
          onBlur={onBlur}
          onChange={handleMonth}
          className="w-14 px-4 py-3 bg-gray-50 rounded-xs text-contents-content-primary placeholder:text-contents-content-tertiary"
        />
        <input
          id={'edit-birth'}
          value={day}
          onBlur={onBlur}
          onChange={handleDay}
          className="w-14 px-4 py-3 bg-gray-50 rounded-xs text-contents-content-primary placeholder:text-contents-content-tertiary"
        />
      </div>
    </div>
  );
}

export default BirthInput;
