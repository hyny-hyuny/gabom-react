interface MemberLevelTagProps {
  level: number;
}

const memberLevelNameList = [
  '전린이',
  '전시 입문',
  '전시 중수!',
  '전시 관람왕!',
];

function MemberLevelTag({ level }: MemberLevelTagProps) {
  return (
    <span className="label-xs text-tertiary bg-white px-custom-2 py-1 rounded-lg">
      {memberLevelNameList[level]}
    </span>
  );
}

export default MemberLevelTag;
