import React from 'react';
import MySummaryDivider from '../atoms/MySummaryDivider';
import MySummaryItem from '../atoms/MySummaryItem';
import { SummaryList } from '@/types/myPage';

export interface MySummaryProps {
  summaryList: SummaryList;
}

function MySummary({ summaryList = [] }: MySummaryProps) {
  const summaryMap = summaryList.map((item, i) => {
    return (
      <React.Fragment key={i}>
        {i !== 0 && <MySummaryDivider />}
        <MySummaryItem count={item.count} label={item.label} />
      </React.Fragment>
    );
  });

  return <ul className='flex flex-row items-center'>{summaryMap}</ul>;
}

export default MySummary;
