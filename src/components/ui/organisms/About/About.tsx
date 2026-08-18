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
      <div className="mx-auto mb-16 max-w-3xl px-4 text-center text-base leading-relaxed md:text-lg">
        Custom doesn&apos;t mean big or expensive. It means built around you. For over 22 years, Rocket Jones has built
        custom software for growing businesses. From small, targeted applications and integrations to large-scale
        platforms, we&apos;ve seen it and done it.
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
      <div className={'mx-auto mt-16 max-w-3xl px-4 text-base leading-relaxed md:text-lg'}>
        <div className={'font-heading font-bold'}>What&apos;s with the name?</div>
        <p className={'mt-2'}>
          Glad you asked. &ldquo;Rocket&rdquo; is for the part of us that geeks out over clean code and hard problems.
          &ldquo;Jones&rdquo; is for the part that still answers the phone and doesn&apos;t make you feel dumb for asking
          a basic question. Most dev agencies make you pick one. We don&apos;t.
        </p>
      </div>
    </Section>
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
