interface TagProps {
  emoji?: string;
  label: string;
}

function Tag({ emoji = '⭐️', label }: TagProps) {
  return (
    <div className="flex px-2 py-0.5 gap-2 rounded-2xs bg-gray-50">
      <span className="paragraph-xs">{emoji}</span>
      <span className="paragraph-xs">{label}</span>
    </div>
  );
}

export default Tag;
