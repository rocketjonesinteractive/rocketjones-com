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
            "Contact Rocket Jones to schedule time so we can get to know you and your company and learn about your story. We will ask questions, listen, and identify your priorities and workflow. The goal is a complete understanding of the app's context, users, and tasks, with a cost estimate as an output."
          }
          stage={1}
          animDelay={0.2}
          videoId={'210969509'}
          videoTitle={'Rocket Jones: Stage 1: Explore + Imagine'}
        />
        <ProcessTile
          title={'Plan + Sketch'}
          description={
            'Just as an architect creates a blueprint for a custom home, we build a blueprint for your custom application based on what we learn during Stage 1. During this stage we work closely with you, sharing ideas and collaborating back and forth. By getting everything on paper, you know exactly what to expect.'
          }
          stage={2}
          animDelay={0.4}
          videoId={'211012114'}
          videoTitle={'Rocket Jones: Stage 2: Plan + Sketch'}
        />
        <ProcessTile
          title={'Build + Test'}
          description={
            'Because of the hard work we’ve done together in Stage 2 of our process, we now have an approved design and clear technical description of the application, down to every button and click. Like the custom homebuilder, we are ready for construction.'
          }
          stage={3}
          animDelay={0.6}
          videoId={'211013296'}
          videoTitle={'Rocket Jones: Stage 3: Build + Test'}
        />
        <ProcessTile
          title={'Support + Scale'}
          description={
            'Launch is only the beginning of a great custom application development project. Changing technology frameworks and browser changes, as well as your business growth, create the need for periodic monitoring and upgrades. We are proactive about keeping your web application current; we plan for the future.'
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
