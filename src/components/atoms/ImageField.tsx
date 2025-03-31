import { tm } from '@/utils/tw-merge';

interface Text {
  title: string;
  description: string;
}
interface ImageFieldProps {
  width: string;
  height: string;
  alt?: string;
  src?: string;
  className?: string;
  text?: Text;
}

function ImageField({
  width = '1rem',
  height = '1rem',
  alt = '',
  src = '',
  text,
  className,
}: ImageFieldProps) {
  return (
    <figure
      style={{ width, height }}
      className={tm(
        `relative overflow-hidden bg-gray-500 rounded-xs shrink-0`,
        className
      )}
    >
      {!!text && (
        <figcaption className="absolute bottom-2 left-2 right-2 overflow-hidden text-white">
          <span className="paragraph-xs overflow-hidden whitespace-nowrap text-ellipsis">
            {text.description}
          </span>
          <h2 className="heading-sm overflow-hidden whitespace-nowrap text-ellipsis">
            {text.title}
          </h2>
        </figcaption>
      )}

      <img className="w-full h-full object-cover" alt={alt} src={src} />
    </figure>
  );
}

export default ImageField;
