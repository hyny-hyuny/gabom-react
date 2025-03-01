interface TagProps {
  emoji?: string;
  label: string;
}

function Tag({ emoji = '⭐️', label }: TagProps) {
  return (
    <div className="flex px-3 py-1 gap-3 rounded-2xs bg-gray-50">
      <span className="text-xs">{emoji}</span>
      <span className="text-xs">{label}</span>
    </div>
  );
}

export default Tag;
