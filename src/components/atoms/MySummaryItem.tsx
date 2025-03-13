interface MySummaryItemProps {
  count: number;
  label: string;
}

function MySummaryItem({ count, label }: MySummaryItemProps) {
  return (
    <li className="flex flex-col gap-1 p-1 items-center w-full">
      <strong className="label-md text-contents-content-primary">
        {count} 건
      </strong>
      <span className="paragraph-xs text-contents-content-secondary">
        {label}
      </span>
    </li>
  );
}

export default MySummaryItem;
