import { Section } from '@/components/ui/atoms/Section/Section';
import { SectionHeading } from '../../molecules/SectionHeading/SectionHeading';
import { ReactNode } from 'react';
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
            'There’s no “one size fits all” in software. We spend time understanding your project and we explore the options before we make any recommendations.'
          }
          icon={<Phone />}
          animDelay={0}
        />
        <AboutTile
          title={'Modernize'}
          description={
            'Replace software that’s slow and hard to maintain with tools built on a modern, scalable platform, aimed where your business is going.'
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
        <div className={'text-center'}>
          <span
            className={
              'relative inline-block font-heading text-[27px] font-bold leading-tight text-black ' +
              "md:before:absolute md:before:left-[-40px] md:before:top-1/2 md:before:h-[2px] md:before:w-[30px] md:before:bg-red md:before:content-[''] " +
              "md:after:absolute md:after:right-[-40px] md:after:top-1/2 md:after:h-[2px] md:after:w-[30px] md:after:bg-red md:after:content-['']"
            }
          >
            What&apos;s with the name?
          </span>
        </div>
        <div className={'mt-2 text-center text-base text-black md:text-lg'}>Glad you asked.</div>
        <div className="mx-auto mt-6 flex max-w-4xl flex-col gap-4">
          <NameHalf
            name={'Rocket'}
            description={'is the part of us that geeks out over clean code and solving hard problems.'}
          />
          <NameHalf
            name={'Jones'}
            description={'is the part that still answers the phone and never makes you feel dumb when asking questions.'}
          />
        </div>
        <div className={'mt-7 text-center font-heading text-sm text-black md:text-base'}>
          Most dev agencies make you pick one.{' '}
          <span className={'font-black text-black'}>We don&apos;t.</span>
        </div>
      </div>
    </AnimateOnScrollDiv>
  );
};

const NameHalf = ({ name, description }: { name: string; description: string }) => {
  return (
    <div className={'text-center text-sm leading-relaxed text-black md:text-base'}>
      <span className={'font-heading text-lg font-black leading-tight text-black md:text-xl'}>{name}</span>{' '}
      {description}
    </div>
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
