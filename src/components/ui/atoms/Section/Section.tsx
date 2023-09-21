import { ReactNode } from 'react';

export const Section = ({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) => {
  return (
    <section
      id={id}
      className={`container flex flex-col items-center justify-center overflow-hidden py-14 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
};
