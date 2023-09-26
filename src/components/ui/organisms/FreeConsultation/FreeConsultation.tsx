'use client';

import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import { scrollToElementId } from '@/utils/scroll.ts';
import { animationVariants } from '@/utils/animations.ts';
import { AnimateOnScrollDiv } from '../../molecules/AnimateOnScrollDiv/AnimateOnScroll';

export const FreeConsultation = () => {
  return (
    <div className={'overflow-hidden p-16 ' + 'bg-black-pattern'}>
      <AnimateOnScrollDiv
        variants={animationVariants.fadeInUp}
        className="container flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16"
      >
        <h3 className={'text-center font-heading text-3xl text-white'}>
          Schedule Your <span className={'font-black text-red'}>Free Consultation</span> Today
        </h3>
        <Button variant={'primary'} onClick={() => scrollToElementId('contact')}>
          Schedule Now
        </Button>
      </AnimateOnScrollDiv>
    </div>
  );
};
