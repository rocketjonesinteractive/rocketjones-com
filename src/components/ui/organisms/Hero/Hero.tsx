'use client';

import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/atoms/Button/Button';
import ChevronDown from '@/../public/img/icons/chevron-down.svg';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay';
import { scrollToElementId } from '@/utils/scroll';
import { useAppStore } from '@/store/app.store';

export const Hero = () => {
  const { videoIsOpen, toggleVideoOpen } = useAppStore();

  const [bgType] = useState<'image' | 'video'>('video');

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', videoIsOpen);
  }, [videoIsOpen]);

  return (
    <div
      className={`flex min-h-screen items-center justify-center overflow-hidden bg-black pt-[var(--header-height)] ${
        bgType === 'image' ? 'bg-hero bg-cover bg-center bg-no-repeat' : ''
      }`}
    >
      <BgOverlay />
      <div className="container relative z-10 flex flex-col items-center px-4 text-center">
        <HeroHeading>Boost Your Business</HeroHeading>
        <HeroTypewriter />
        <HeroDescription />
        <HeroCTA onOpenVideoClick={() => toggleVideoOpen('156733981', 'Rocket Jones: Overview')} />
      </div>
      <ScrollDownArrow />
      {bgType === 'video' && <HeroBgVideo />}
    </div>
  );
};

export const HeroHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className={
        'text-md relative inline-block font-heading text-white sm:text-2xl md:text-[36px] ' +
        "before:absolute before:left-[-40px] before:top-1/2 before:h-[2px] before:w-[30px] before:bg-red before:content-[''] " +
        "after:absolute after:right-[-40px] after:top-1/2 after:h-[2px] after:w-[30px] after:bg-red after:content-['']"
      }
    >
      {children}
    </h2>
  );
};

export const HeroTypewriter = () => {
  const messages = useMemo(
    () => ['MOBILE', 'WEB', 'CLOUD', 'DESIGN', 'DATA', 'SECURITY', 'ENTERPRISE', 'SAAS'],
    [],
  );
  const animTimeout = useRef<NodeJS.Timeout | null>();
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    animTimeout.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
        setCurrentMessage(messages[currentIndex]);
        setIsTransitioning(false);
      }, 1000);
    }, 3000);

    return () => {
      if (animTimeout.current !== null) clearInterval(animTimeout.current);
    };
  }, [currentIndex, messages]);

  return (
    <div
      className={
        'my-4 font-heading text-[32px] font-bold uppercase leading-none text-white md:text-[48px] lg:text-[64px]'
      }
    >
      <span
        className={'mr-2 inline-block overflow-hidden transition-all duration-1000 md:mr-3 lg:mr-4'}
      >
        We Know{' '}
      </span>
      <span
        className={`typetext inline-block overflow-hidden text-red transition-all duration-1000 ease-in-out ${
          isTransitioning ? 'max-w-[0px]' : 'max-w-[1000px]'
        }`}
      >
        {currentMessage}&nbsp;
      </span>
      <span
        className={
          'inline-block w-[1px] animate-blink overflow-hidden border-r-2 border-r-white/50'
        }
      >
        &nbsp;
      </span>
    </div>
  );
};

export const HeroDescription = () => {
  return (
    <div className={'mb-8 font-heading text-sm text-white [text-wrap:balance] md:text-base'}>
      Streamline and grow your business with custom app development by Rocket Jones.
    </div>
  );
};

export const HeroCTA = ({ onOpenVideoClick }: { onOpenVideoClick: () => void }) => {
  return (
    <div className={'flex flex-col gap-2 sm:flex-row'}>
      <Button variant={'secondary'} onClick={() => scrollToElementId('contact')}>
        Free Consultation
      </Button>
      <Button variant={'primary'} onClick={onOpenVideoClick}>
        &#x25BA;&nbsp;&nbsp;Watch Video
      </Button>
    </div>
  );
};

export const ScrollDownArrow = () => {
  return (
    <div
      className={
        'absolute bottom-[20px] z-10 flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[18px] bg-red text-white transition-all hover:scale-125 hover:bg-white hover:text-red sm:bottom-[40px] lg:bottom-[80px]'
      }
      onClick={() => scrollToElementId('about')}
    >
      <ChevronDown />
    </div>
  );
};

const HeroBgVideo = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-0 overflow-hidden">
      <video
        loop={true}
        autoPlay={true}
        playsInline={true}
        muted={true}
        width="960"
        preload="none"
        src="/video/hero-bg.mp4"
        poster={'/img/hero-bg-poster.jpg'}
        className={
          'absolute bottom-0 right-0 min-h-full w-auto min-w-full max-w-none translate-x-[calc((100%-100vw)/2)] transform'
          //'absolute z-[1] min-h-full w-auto min-w-full max-w-none' + ' right-[50%] mr-[-65%]' // "center" for original rocket video
        }
      >
        <source type="video/mp4" src="/video/hero-bg.mp4" />
        <source type="video/webm" src="/video/hero-bg.webm" />
      </video>
    </div>
  );
};
