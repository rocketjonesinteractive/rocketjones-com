import { ReactNode } from 'react';

export const Section = ({ children, id }: { children: ReactNode; id?: string }) => {
  return (
    <section
      id={id}
      className={
        'container flex flex-col items-center justify-center overflow-hidden py-14 lg:py-28'
      }
    >
      {children}
    </section>
  );
};
