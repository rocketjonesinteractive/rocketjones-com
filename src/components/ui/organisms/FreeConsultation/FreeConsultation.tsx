'use client';

import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import { scrollToElementId } from '@/utils/scroll.ts';
import { animationVariants } from '@/utils/animations.ts';
import { AnimateOnScrollDiv } from '../../molecules/AnimateOnScrollDiv/AnimateOnScroll';
import Image from 'next/image';

export const FreeConsultation = () => {
  return (
    <div className={'overflow-hidden p-16 ' + 'bg-black-pattern'}>
      <AnimateOnScrollDiv
        variants={animationVariants.fadeInUp}
        className="container flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16"
      >
        <h3 className={'text-center font-heading text-[28px] text-white'}>
          <span className={'font-black text-white'}>Boost Your Business</span>
          {' With '}
          <Image
            src={`/img/rocket-jones-logo-white.svg`}
            alt={'Rocket Jones Interactive'}
            width={212}
            height={32}
            className={`relative top-[-2px] mb-[3px] inline-block max-h-[32px] w-auto lg:max-h-[64px]`}
            loading={'eager'}
          />
        </h3>
        <Button variant={'primary'} onClick={() => scrollToElementId('contact')}>
          Schedule Now
        </Button>
      </AnimateOnScrollDiv>
    </div>
  );
};
