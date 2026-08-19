'use client';

import { animationVariants } from '@/utils/animations';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { ReactNode } from 'react';

export const SectionHeading = ({
  caption,
  title,
  titleClassName = 'text-black',
}: {
  caption: string;
  title: string | ReactNode;
  titleClassName?: string;
}) => {
  return (
    <AnimateOnScrollDiv
      variants={animationVariants.fadeInUp}
      className={'section-heading mb-16 text-center font-heading'}
    >
      <div className={'uppercase text-red'}>{caption}</div>
      <div className={`px-2 text-[36px] leading-tight [text-wrap:balance] ${titleClassName}`}>{title}</div>
      <div className="mx-auto mt-2 w-[60px] border-b-2 border-b-red"></div>
    </AnimateOnScrollDiv>
  );
};
