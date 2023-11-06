import { ReactNode } from 'react';

export const IconButton = ({
  className = '',
  IconComponent,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  className?: string;
  IconComponent: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => {
  return (
    <div
      className={`flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[18px] bg-white bg-opacity-20 text-white transition-all hover:scale-125 hover:bg-red hover:text-white ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {IconComponent}
    </div>
  );
};
