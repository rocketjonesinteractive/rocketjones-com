import React from 'react';
import { SectionHeading } from '@/components/ui/molecules/SectionHeading/SectionHeading.tsx';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import Link from 'next/link';
import { animationVariants } from '@/utils/animations.ts';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll.tsx';

export const GuideCta = () => {
  return (
    <div className={'bg-gradient-to-b from-gray-100 to-gray-300'}>
      <div
        className={
          'overflow-hidden px-8 py-14 lg:py-28 ' +
          'bg-circuits bg-opacity-50 bg-top-1/2 bg-no-repeat'
        }
      >
        <SectionHeading
          caption={'Free Download'}
          title={
            <>
              Solve Your <strong>Tech Stack Dilemmas</strong>
            </>
          }
        />
        <AnimateOnScrollDiv variants={animationVariants.fadeInUp}>
          <div
            className={
              'relative z-[1] mx-auto mt-8 max-w-2xl text-center leading-relaxed [text-wrap:balance]'
            }
          >
            For over 20 years, we&apos;ve been solving complex technology challenges for businesses
            like yours. Now, we&apos;re offering our problem-solving expertise to you.
          </div>
          <div className={'mt-8 flex justify-center'}>
            <Link href={`/guides/cracking-the-tech-stack-code`}>
              <Button>Download Our Free Guide</Button>
            </Link>
          </div>
        </AnimateOnScrollDiv>
      </div>
    </div>
  );
};
