'use client';

import { ReactNode } from 'react';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { addDelay, animationVariants } from '@/utils/animations';
import MessageChat from '../../../../../public/img/icons/message-chat-square.svg';
import CheckCircle from '../../../../../public/img/icons/check-circle-broken.svg';
import BankNote from '../../../../../public/img/icons/bank-note.svg';
import Rocket from '../../../../../public/img/icons/rocket.svg';
import { scrollToElementId } from '@/utils/scroll.ts';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';

export const Promise = () => {
  return (
    <div className={'promise invert-selection grid grid-cols-6 overflow-hidden text-white'}>
      <div
        className={
          'col-span-6 flex flex-col items-center justify-center bg-red p-16 text-center lg:col-span-3'
        }
      >
        <AnimateOnScrollDiv variants={animationVariants.promiseText} className={'relative'}>
          <div
            className={'relative z-[1] font-heading text-[36px] uppercase leading-tight text-black'}
          >
            The <span className={'font-black'}>Rocket</span> Promise
          </div>
          <div className={'relative z-[1] mt-8 font-heading leading-relaxed [text-wrap:balance]'}>
            We promise painless projects every time. The Rocket Jones team sincerely cares about the
            success of every project, and our work is founded on these three principles.
          </div>
          <Button
            variant={'quinary'}
            onClick={() => scrollToElementId('contact')}
            className={'relative z-[1] mx-auto mt-8'}
          >
            Schedule Free Consultation
          </Button>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-0 flex items-center justify-center">
            <Rocket className={'scale-[0.65] text-black opacity-10 lg:scale-100'} />
          </div>
        </AnimateOnScrollDiv>
      </div>
      <div className={'bg-black-pattern relative col-span-6 px-8 py-16 lg:col-span-3 lg:px-16'}>
        <div className="mx-4 flex flex-col items-start justify-center gap-4 md:mx-8 md:gap-8">
          <PromiseTile
            title={'Communication'}
            description={
              'We have a knack for making the complex simple. If you ever have a question or concern during any part of your project, send us an email or give us a call. We are here to help.'
            }
            icon={<MessageChat className={'text-red'} />}
            animDelay={0}
          />
          <PromiseTile
            title={'Quality'}
            description={
              'We are good at what we do, and we promise the highest quality solutions possible. We deliver beautiful, secure, and scalable software.'
            }
            icon={<CheckCircle className={'text-red'} />}
            animDelay={0.2}
          />
          <PromiseTile
            title={'Honesty'}
            description={
              'Surprises are for birthdays, not invoices. We constantly communicate, and we stick to the budget. If changes are required, the final decision is always the customer’s.'
            }
            icon={<BankNote className={'text-red'} />}
            animDelay={0.4}
          />
        </div>
      </div>
    </div>
  );
};

const PromiseTile = ({
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
    <AnimateOnScrollDiv variants={addDelay(animationVariants.promiseTile, animDelay ?? 0)}>
      <div className="flex gap-4">
        <div>{icon}</div>
        <div>
          <div className="mb-2 mt-1 font-heading font-bold uppercase tracking-wider text-red">
            {title}
          </div>
          <div className={'text-sm leading-relaxed'}>{description}</div>
        </div>
      </div>
    </AnimateOnScrollDiv>
  );
};
