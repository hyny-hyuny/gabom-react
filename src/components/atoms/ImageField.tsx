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
      style={{width, height}}
      className={`overflow-hidden bg-gray-500 rounded-xs shrink-0`}
    >
      <img className="w-full h-full object-cover" alt={alt} {...imgProps} />
    </div>
  );
}

export default ImageField;
