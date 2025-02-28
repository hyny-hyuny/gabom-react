import { ComponentProps } from 'react';

type ImageFieldProps = ComponentProps<'img'> & {
  width: string;
  height: string;
};

function ImageField({
  width = '1rem',
  height = '1rem',
  alt = '',
  ...imgProps
}: ImageFieldProps) {
  return (
    <div
      className={`overflow-hidden bg-gray-500 rounded-xs shrink-0 w-[${width}] h-[${height}]`}
    >
      <img className="w-full h-full object-cover" alt={alt} {...imgProps} />
    </div>
  );
}

export default ImageField;
