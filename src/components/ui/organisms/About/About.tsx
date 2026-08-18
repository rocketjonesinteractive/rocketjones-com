import { Section } from '@/components/ui/atoms/Section/Section';
import { SectionHeading } from '../../molecules/SectionHeading/SectionHeading';
import { ReactNode } from 'react';
import { Variants } from 'framer-motion';
import Hourglass from '@/../public/img/icons/hourglass.svg';
import Phone from '@/../public/img/icons/phone.svg';
import UploadCloud from '@/../public/img/icons/upload-cloud.svg';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { addDelay, animationVariants } from '@/utils/animations';

export const About = () => {
  return (
    <Section id={'about'}>
      <SectionHeading caption={''} title={<>Who We Are</>} />
      <div className="mx-auto mb-6 max-w-3xl px-4 text-center font-heading text-lg leading-relaxed text-black [text-wrap:balance] md:text-xl">
        Custom doesn&apos;t mean big or expensive. It means built around you.
      </div>
      <div className="mx-auto mb-16 max-w-5xl px-4 text-center text-base leading-relaxed [text-wrap:balance] md:text-lg">
        For over 22 years, Rocket Jones has built custom software for growing businesses. From small, targeted
        applications and integrations to large-scale platforms, we&apos;ve seen it and done it.
      </div>
      <div className="mx-4 grid grid-cols-1 items-start justify-center gap-8 md:mx-8 md:gap-16 lg:grid-cols-3">
        <AboutTile
          title={'Advise'}
          description={
            "You need a partner that listens, not another sales pitch. Before a direction gets recommended we spend time understanding your project, your needs and your constraints, because we believe there's no “one size fits all” in software."
          }
          icon={<Phone />}
          animDelay={0}
        />
        <AboutTile
          title={'Modernize'}
          description={
            "Replace software that's slow and hard to maintain with tools built on a modern platform, aimed where your business is going. Connect your internal and cloud-based systems so information flows automatically."
          }
          icon={<Hourglass />}
          animDelay={0.2}
        />
        <AboutTile
          title={'Sustain'}
          description={
            'Launch is the beginning, not the finish line. We plan and partner with you for the long-term, so you have the support you need as your business grows.'
          }
          icon={<UploadCloud />}
          animDelay={0.4}
        />
      </div>
      <NameStory />
    </Section>
  );
};

const NameStory = () => {
  return (
    <AnimateOnScrollDiv variants={animationVariants.fadeInUp} className={'mt-16 w-full'}>
      <div className="border-greyOutline mx-4 border-2 bg-greyLight p-6 md:mx-8 md:p-9">
        <div className={'text-center font-heading text-[27px] font-bold leading-tight text-black'}>
          What&apos;s with the name?
        </div>
        <div className={'mt-2 text-center text-sm text-black'}>Glad you asked.</div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-0">
          <NameHalf
            name={'Rocket'}
            description={'is for the part of us that geeks out over clean code and hard problems.'}
            variants={animationVariants.fadeInLeft}
          />
          <NameHalf
            name={'Jones'}
            description={
              'is for the part that still answers the phone and doesn’t make you feel dumb for asking a basic question.'
            }
            variants={animationVariants.fadeInRight}
            className={'md:border-greyBorder md:border-l-2 md:pl-6'}
          />
        </div>
        <div className={'mt-7 text-center font-heading text-sm text-black md:text-base'}>
          Most dev agencies make you pick one.{' '}
          <span className={'font-black text-red'}>We don&apos;t.</span>
        </div>
      </div>
    </AnimateOnScrollDiv>
  );
};

const NameHalf = ({
  name,
  description,
  variants,
  className,
}: {
  name: string;
  description: string;
  variants: Variants;
  className?: string;
}) => {
  return (
    <AnimateOnScrollDiv variants={variants} className={`md:pr-6 ${className ?? ''}`}>
      <div className={'group text-center md:text-left'}>
        <div
          className={
            'font-heading text-[24px] font-black uppercase leading-none tracking-tight text-black ' +
            'transition-colors group-hover:text-red md:text-[30px]'
          }
        >
          {name}
        </div>
        <div className="mx-auto mt-2 w-[30px] border-b-2 border-b-red transition-all group-hover:w-[60px] md:mx-0"></div>
        <div className={'mt-3 text-sm leading-relaxed md:text-base'}>{description}</div>
      </div>
    </AnimateOnScrollDiv>
  );
};

const AboutTile = ({
  title,
  description,
  icon,
  animDelay,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  animDelay?: number;
}) => {
  return (
    <AnimateOnScrollDiv variants={addDelay(animationVariants.aboutTile, animDelay ?? 0)}>
      <div className="flex gap-4">
        <div>{icon}</div>
        <div>
          <div className="mb-2 mt-1 font-heading font-medium uppercase tracking-wider">{title}</div>
          <div className={'text-sm leading-relaxed'}>{description}</div>
        </div>
      </div>
    </AnimateOnScrollDiv>
  );
};
