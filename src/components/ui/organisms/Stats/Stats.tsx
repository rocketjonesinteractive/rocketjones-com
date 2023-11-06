import { ReactNode } from 'react';
import Users from '@/../public/img/icons/users.svg';
import Building from '@/../public/img/icons/building.svg';
import Database from '@/../public/img/icons/database.svg';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { addDelay, animationVariants } from '@/utils/animations';

export const Stats = () => {
  return (
    <div className={'overflow-hidden p-16 ' + 'bg-tan'}>
      <div className="container flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
        <Stat value={'8+ Years'} caption={'Avg. Partnership'} icon={<Users />} animDelay={0} />
        <Stat value={'22 Years'} caption={'In Business'} icon={<Building />} animDelay={0.2} />
        <Stat value={'500+'} caption={'Terabytes Managed'} icon={<Database />} animDelay={0.4} />
      </div>
    </div>
  );
};

const Stat = ({
  value,
  caption,
  icon,
  animDelay,
}: {
  value: string;
  caption: string;
  icon: ReactNode;
  animDelay?: number;
}) => {
  return (
    <AnimateOnScrollDiv
      variants={addDelay(animationVariants.stat, animDelay ?? 0)}
      className="w-full md:w-1/3"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className={'text-red'}>{icon}</div>
        <div>
          <div className="mb-2 font-heading text-[28px] font-medium leading-none text-black">
            {value}
          </div>
          <div className={'font-heading text-xs uppercase tracking-wider text-black'}>
            {caption}
          </div>
          <div className="mx-auto my-4 mt-3 w-[60px] border-b-2 border-b-red"></div>
        </div>
      </div>
    </AnimateOnScrollDiv>
  );
};
