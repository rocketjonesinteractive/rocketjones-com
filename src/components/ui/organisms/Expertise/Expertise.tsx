import Quote from '@/../public/img/icons/quote.svg';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { addDelay, animationVariants } from '@/utils/animations';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay';
import Spotlight from '@/components/ui/organisms/Spotlight/Spotlight';

export const Expertise = () => {
  return (
    <div className={'grid grid-cols-6 overflow-hidden'}>
      <AnimateOnScrollDiv
        variants={addDelay(animationVariants.fadeInLeft, 0.4)}
        className={
          'col-span-6 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-12 uppercase md:col-span-3 lg:col-span-2'
        }
      >
        <Spotlight />
        <Quote className={'mb-2 text-red'} />
        <div className={'font-heading text-[22px] font-medium leading-tight text-white'}>
          Of all their great qualities, collaboration is probably the top one for Rocket Jones. They
          know how to juggle business needs, user experience, and our vision. Plus, they are
          incredibly adept at understanding the impact of one on the other.
        </div>
        <div className={'ml-[60px]'}>
          <div
            className={
              'relative mt-4 font-heading font-bold leading-none ' +
              "before:absolute before:left-[-35px] before:top-1/2 before:h-[2px] before:w-[20px] before:bg-red before:content-['']"
            }
          >
            Tim Creasey
          </div>
          <div className={'font-heading text-sm font-medium'}>
            Chief Development Officer, Prosci
          </div>
        </div>
      </AnimateOnScrollDiv>
      <AnimateOnScrollDiv
        variants={addDelay(animationVariants.fadeInLeft, 0.2)}
        className={
          'relative col-span-6 min-h-[300px] bg-zinc-800 bg-expertise bg-cover bg-center bg-no-repeat md:col-span-3 lg:col-span-2'
        }
      >
        <Spotlight />
        <BgOverlay opacity={40} />
        <div className="innerborder border-8-white absolute left-[20px] top-[20px] h-[calc(100%-40px)] w-[calc(100%-40px)] border-8 opacity-30"></div>
      </AnimateOnScrollDiv>
      <AnimateOnScrollDiv
        variants={addDelay(animationVariants.fadeInLeft, 0)}
        className={
          'col-span-6 p-12 uppercase lg:col-span-2 ' + 'bg-gradient-to-r from-gray-100 to-gray-300'
        }
      >
        <Spotlight />
        <Quote className={'mb-2 text-red'} />
        <div
          className={'font-heading text-[22px] font-medium leading-tight text-black lg:text-[18px]'}
        >
          Rocket Jones makes custom web development easy. In Rocket Jones, we have a partner who has
          invested in understanding our technology and bringing it to life in a web application. As
          developers ourselves, we can attest to the quality of their work. The team is very
          responsive and invested in productive outcomes.
        </div>
        <div className={'ml-[60px]'}>
          <div
            className={
              'relative mt-4 font-heading font-bold leading-none ' +
              "before:absolute before:left-[-35px] before:top-1/2 before:h-[2px] before:w-[20px] before:bg-red before:content-['']"
            }
          >
            Ross Liggett
          </div>
          <div className={'font-heading text-sm font-medium'}>
            Founder and Managing Partner, Metolius Golf
          </div>
        </div>
      </AnimateOnScrollDiv>
    </div>
  );
};

export const ExpertisePercentage = ({
  title,
  percent,
  animDelay = 0,
}: {
  title: string;
  percent: number;
  animDelay?: number;
}) => {
  return (
    <div className={'expertise-percentage'}>
      <div className={'text-sm'}>{title}</div>
      <div
        className={'relative overflow-hidden bg-zinc-200 py-1.5 pr-2 text-right text-xs text-white'}
      >
        <AnimateOnScrollDiv
          variants={addDelay(animationVariants.expertisePercent, animDelay ?? 0)}
          className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-red"
        />
        <span className={'z-1 relative'}>{percent}%</span>
      </div>
    </div>
  );
};
