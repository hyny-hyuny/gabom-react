interface ChipTypes {
  label: string;
  ispress: boolean;
}

function ChipBtn({ label = '이름', ispress }: ChipTypes) {
  return (
    <button type="button" aria-pressed={ispress}>
      {label}
    </button>
  );
}

export default ChipBtn;
