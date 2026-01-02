'use client';

import { ReactNode, useEffect, useState } from 'react';
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
      className={`relative flex min-h-screen items-center justify-center overflow-hidden bg-black pb-24 pt-[var(--header-height)] ${
        bgType === 'image' ? 'bg-hero bg-cover bg-center bg-no-repeat' : ''
      }`}
    >
      <BgOverlay />
      <div className="container relative z-10 flex flex-col items-center px-4 text-center">
        <HeroHeading>Your Business is Growing</HeroHeading>
        <HeroSubheading>Make Sure Your Technology Keeps Up</HeroSubheading>
        <HeroDescriptionTop />
        <HeroCTA />
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
        'relative inline-block font-heading text-lg font-bold uppercase tracking-widest text-white sm:text-xl md:text-2xl ' +
        "before:absolute before:left-[-40px] before:top-1/2 before:h-[2px] before:w-[30px] before:bg-red before:content-[''] " +
        "after:absolute after:right-[-40px] after:top-1/2 after:h-[2px] after:w-[30px] after:bg-red after:content-['']"
      }
    >
      {children}
    </h2>
  );
};

export const HeroSubheading = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="my-6 font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
      {children}
    </h3>
  );
};

export const HeroDescriptionTop = () => {
  return (
    <div className={'mx-auto mb-10 max-w-3xl font-heading text-base leading-relaxed text-white/90 [text-wrap:balance] md:text-xl'}>
      Your old software served you well, but now you need tools that scale with your ambitions.
    </div>
  );
};

export const HeroDescriptionBottom = () => {
  return (
    <div className={'mx-auto mt-10 max-w-3xl font-heading text-base leading-relaxed text-white/90 [text-wrap:balance] md:text-xl'}>
      Rocket Jones is a full-service development agency for businesses that depend on web technology. We partner with you to upgrade old sites and systems, get everything connected, automate routine work, and build custom tools where it makes sense.
    </div>
  );
};

export const HeroCTA = () => {
  return (
    <div className={'flex flex-col gap-4 sm:flex-row'}>
      <Button variant={'secondary'} onClick={() => scrollToElementId('contact')}>
        Tell Us What&apos;s Holding You Back
      </Button>
    </div>
  );
};

export const ScrollDownArrow = () => {
  return (
    <div
      className={
        'absolute bottom-[20px] z-10 hidden h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[18px] bg-red text-white transition-all hover:scale-125 hover:bg-white hover:text-red lg:flex lg:bottom-[80px]'
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
