'use client';

import { Section } from '@/components/ui/atoms/Section/Section';
import { SectionHeading } from '../../molecules/SectionHeading/SectionHeading';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { addDelay, animationVariants } from '@/utils/animations';
import { useAppStore } from '@/store/app.store';
import { scrollToElementId } from '@/utils/scroll.ts';
import { Button } from '../../atoms/Button/Button';
import Image from 'next/image';

export const Process = () => {
  return (
    <Section id={'process'}>
      <SectionHeading
        caption={'Solutions at Every Stage'}
        title={
          <>
            The Rocket <span className={'font-semibold'}>Process</span>
          </>
        }
      />
      <div className="mx-4 grid gap-4 md:mx-8 md:grid-cols-2 md:gap-8 xl:grid-cols-4">
        <ProcessTile
          title={'Explore + Imagine'}
          description={
            'Some clients come to us knowing exactly what they need, but most come with a vision or an idea that hasn’t taken shape. We genuinely enjoy this stage: identifying the possibilities, defining the scope, and finding the right approach together. Most projects can be scoped quickly at no charge. Larger projects may involve a paid Discovery phase, but we’ll always tell you that upfront.'
          }
          stage={1}
          animDelay={0.2}
          videoId={'210969509'}
          videoTitle={'Rocket Jones: Stage 1: Explore + Imagine'}
        />
        <ProcessTile
          title={'Plan + Sketch'}
          description={
            'Once we’ve agreed on the right path, we put it on paper in a detailed spec document, like an architect’s blueprint. We walk through it with you so there are no surprises. You’ll know exactly what’s being built, why, and exactly what it costs before anything starts. If the plan calls for wireframes or visuals, this is where we build them.'
          }
          stage={2}
          animDelay={0.4}
          videoId={'211012114'}
          videoTitle={'Rocket Jones: Stage 2: Plan + Sketch'}
        />
        <ProcessTile
          title={'Build + Test'}
          description={
            'With the plan approved, construction begins. Our engineers pair deep technical experience with modern, AI-assisted development, which means we move faster and keep costs lower, without cutting corners on the craft. You’ll participate in scheduled reviews and testing along the way to make sure the finished product hits the mark.'
          }
          stage={3}
          animDelay={0.6}
          videoId={'211013296'}
          videoTitle={'Rocket Jones: Stage 3: Build + Test'}
        />
        <ProcessTile
          title={'Support + Scale'}
          description={
            'Launch is the beginning, not the finish line. Technology changes, and so will your business, so we stay on to monitor, adjust, and grow what we built together. We’re proud of the fact that our average client relationship lasts over eight years.'
          }
          stage={4}
          animDelay={0.8}
          videoId={'211017138'}
          videoTitle={'Rocket Jones: Stage 4: Support + Scale'}
        />
      </div>
      <AnimateOnScrollDiv variants={animationVariants.fadeInUp} className={'mt-4 w-full md:mt-8'}>
        <div className="bg-tan border-tanDarker mx-4 flex flex-col items-center justify-center gap-4 border-2 p-4 sm:p-8 md:mx-8 md:gap-8 lg:flex-row">
          <h3 className={'text-tanDarkest text-center font-heading text-3xl'}>
            Start Your Project With A <span className={'font-black'}>Free Consultation</span>
          </h3>
          <Button variant={'tan'} onClick={() => scrollToElementId('contact')}>
            Schedule Now
          </Button>
        </div>
      </AnimateOnScrollDiv>
    </Section>
  );
};

const ProcessTile = ({
  title,
  description,
  stage,
  animDelay,
  videoId,
  videoTitle,
}: {
  title: string;
  description: string;
  stage: number;
  animDelay?: number;
  videoId: string;
  videoTitle: string;
}) => {
  const { toggleVideoOpen } = useAppStore();

  return (
    <AnimateOnScrollDiv variants={addDelay(animationVariants.processTile, animDelay ?? 0)}>
      <div
        className={
          'group h-full border-2 border-greyOutline shadow-none transition-all duration-500 hover:border-transparent hover:shadow-2xl'
        }
      >
        <div className="flex h-full flex-col items-center justify-between p-8 text-center">
          <div className={'mb-0'}>
            <div
              className={
                'mx-auto mb-4 flex h-[48px] w-[48px] items-center justify-center rounded-[24px] border-2 border-grey font-heading text-lg font-semibold transition-all duration-500 group-hover:scale-125 group-hover:border-red group-hover:text-red'
              }
            >
              {stage}
            </div>
            <div className="mb-2 mt-1 font-heading font-semibold uppercase tracking-wider text-black">
              {title}
            </div>
            <div className="mx-auto my-4 mt-3 w-[60px] border-b-2 border-b-red"></div>
            {/*<div*/}
            {/*  className={*/}
            {/*    'relative mb-4 inline-block cursor-pointer font-heading text-xs font-semibold uppercase transition-colors hover:relative hover:text-red hover:transition-all '*/}
            {/*  }*/}
            {/*  onClick={() => toggleVideoOpen(videoId, videoTitle)}*/}
            {/*>*/}
            {/*  &#x25BA;&nbsp;&nbsp;Watch Video*/}
            {/*</div>*/}
            <div className={'text-sm leading-relaxed'}>{description}</div>
          </div>
        </div>
      </div>
    </AnimateOnScrollDiv>
  );
};
