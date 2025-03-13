import { tm } from '@/utils/tw-merge';

interface ImageFieldProps  {
  width: string;
  height: string;
  alt?: string;
  src?: string;
  className?: string;
};

function ImageField({
  width = '1rem',
  height = '1rem',
  alt = '',
  src = '',
  className,
}: ImageFieldProps) {
  return (
    <div
      style={{ width, height }}
      className={tm(
        `overflow-hidden bg-gray-500 rounded-xs shrink-0`,
        className
      )}
    >
      <img className="w-full h-full object-cover" alt={alt} src={src} />
    </div>
  );
}

export default ImageField;
