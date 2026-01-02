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
      <div className="mx-auto mb-16 max-w-3xl px-4 text-center text-base leading-relaxed text-black md:text-lg">
        Rocket Jones is a team of US-based developers with a 22+ year track record of successfully designing, rebuilding, and supporting modern custom software that enables growing companies to operate faster and scale confidently.
      </div>
      <div className="mx-4 grid grid-cols-1 items-start justify-center gap-8 md:mx-8 md:gap-16 lg:grid-cols-3">
        <AboutTile
          title={'Modernize'}
          description={
            'Replace those outdated systems that are slow, brittle, and hard to maintain with modern, high-performance custom tools tailored to how your business actually works.'
          }
          icon={<Hourglass />}
          animDelay={0}
        />
        <AboutTile
          title={'Integrate Systems'}
          description={
            "Tired of moving between disparate systems that don't communicate? We get internal and cloud-based software to communicate, ensuring your business is fully integrated."
          }
          icon={<Phone />}
          animDelay={0.2}
        />
        <AboutTile
          title={'Stay Current'}
          description={
            'We offer ongoing support and maintenance so your app can adapt to your business needs, operate without downtime, and stay current with the latest updates.'
          }
          icon={<UploadCloud />}
          animDelay={0.4}
        />
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
