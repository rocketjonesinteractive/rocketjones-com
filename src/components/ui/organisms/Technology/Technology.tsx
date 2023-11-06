import { Section } from '@/components/ui/atoms/Section/Section';
import { SectionHeading } from '../../molecules/SectionHeading/SectionHeading';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { addDelay, animationVariants } from '@/utils/animations';
import Image from 'next/image';

export const Technology = () => {
  return (
    <Section id={'technology'} className={'bg-moon bg-top-1/2 bg-opacity-25 bg-cover bg-no-repeat'}>
      <SectionHeading
        caption={'Trusted Platforms'}
        title={
          <>
            We Deliver <span className={'font-semibold'}>Solutions That Scale</span>
          </>
        }
      />
      <div className="mx-4 mt-0 grid w-full gap-0 md:mx-8 md:mt-8 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
        <PlatformLogo
          title={'AWS'}
          src={'/img/tech-logos/aws.svg'}
          width={160}
          height={80}
          animDelay={0}
        />
        <PlatformLogo
          title={'Google Cloud'}
          src={'/img/tech-logos/google-cloud.svg'}
          width={160}
          height={80}
          animDelay={0.2}
        />
        <PlatformLogo
          title={'Azure'}
          src={'/img/tech-logos/azure.svg'}
          width={160}
          height={80}
          animDelay={0.4}
        />
        <PlatformLogo
          title={'Kubernetes'}
          src={'/img/tech-logos/kubernetes.svg'}
          width={160}
          height={80}
          animDelay={0.6}
        />
        <PlatformLogo
          title={'Cloudflare'}
          src={'/img/tech-logos/cloudflare.svg'}
          width={160}
          height={80}
          animDelay={0}
        />
        <PlatformLogo
          title={'Stripe'}
          src={'/img/tech-logos/stripe.svg'}
          width={160}
          height={80}
          animDelay={0.2}
        />
        <PlatformLogo
          title={'Salesforce'}
          src={'/img/tech-logos/salesforce.svg'}
          width={160}
          height={80}
          animDelay={0.4}
        />
        <PlatformLogo
          title={'WordPress'}
          src={'/img/tech-logos/wordpress.svg'}
          width={160}
          height={80}
          animDelay={0.6}
        />
      </div>
    </Section>
  );
};

const PlatformLogo = ({
  title,
  src,
  animDelay,
  width,
  height,
}: {
  title: string;
  src: string;
  width: number;
  height: number;
  animDelay?: number;
}) => {
  return (
    <AnimateOnScrollDiv
      variants={addDelay(animationVariants.platformLogo, animDelay ?? 0)}
      className={'boxed group my-0 flex items-center justify-center'}
    >
      <Image
        src={src}
        alt={title}
        width={width}
        height={height}
        className={
          'opacity-50 saturate-0 transition-all group-hover:opacity-100 group-hover:saturate-100'
        }
      />
    </AnimateOnScrollDiv>
  );
};
