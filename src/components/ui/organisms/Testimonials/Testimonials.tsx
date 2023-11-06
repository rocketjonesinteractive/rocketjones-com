'use client';

import Quote from '@/../public/img/icons/quote.svg';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll';
import { animationVariants } from '@/utils/animations';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay';
import Spotlight from '@/components/ui/organisms/Spotlight/Spotlight';
import Image from 'next/image';
import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import ChevronDown from '../../../../../public/img/icons/chevron-down.svg';
import { IconButton } from '@/components/ui/atoms/IconButton/IconButton.tsx';
import { useCallback, useEffect, useState } from 'react';
import { slugify } from '@/utils/string.ts';
import Link from 'next/link';
import projectEntries from '@/data/ProjectData.ts';

const testimonials = projectEntries.filter((x) => x.hasTestimonial);

export const Testimonials = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [animationVariant, setAnimationVariant] = useState(animationVariants.testimonialNext);
  const [isPaused, setIsPaused] = useState(false);

  const testimonial = testimonials[curIndex];

  const goNext = useCallback(() => {
    let index = curIndex + 1;
    if (index > testimonials.length - 1) index = 0;
    setCurIndex(index);
    setAnimationVariant(animationVariants.testimonialNext);
  }, [curIndex]);

  const goPrev = () => {
    let index = curIndex - 1;
    if (index < 0) index = testimonials.length - 1;
    setCurIndex(index);
    setAnimationVariant(animationVariants.testimonialPrev);
  };

  const gotoIndex = (i: number) => {
    setCurIndex(i);
    setAnimationVariant(
      i < curIndex ? animationVariants.testimonialPrev : animationVariants.testimonialNext,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;
      goNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [goNext, isPaused]);

  return (
    <>
      <div key={testimonial.company} className={'grid grid-cols-6 overflow-hidden'}>
        <div
          className={`relative col-span-6 flex min-h-[300px] items-center justify-center bg-zinc-800 bg-cover bg-center bg-no-repeat md:col-span-3 lg:col-span-2 bg-project${testimonial.key}1`}
        >
          <Spotlight />
          <BgOverlay opacity={40} />
          <div className="innerborder border-8-white absolute left-[20px] top-[20px] z-10 h-[calc(100%-40px)] w-[calc(100%-40px)] border-8 opacity-30"></div>
        </div>
        <div
          className={
            'relative col-span-6 flex min-h-[400px] flex-col items-center justify-center p-12 md:col-span-3 lg:col-span-2 lg:min-h-[462px] ' +
            testimonial.bgGradient
          }
        >
          <AnimateOnScrollDiv
            variants={animationVariant}
            className={'flex select-none flex-col items-center justify-center text-white'}
          >
            <Image
              src={testimonial.logoUrl}
              alt={`${testimonial.company} Logo`}
              width={testimonial.logoWidth}
              height={testimonial.logoHeight}
              style={{
                width: testimonial.logoWidth,
                height: testimonial.logoHeight,
              }}
            />
            <div className={'mt-8 px-8 text-center text-white [text-wrap:balance] md:px-12'}>
              {testimonial.caption}
            </div>
            <Link href={`/projects/${slugify(testimonial.key)}`}>
              <Button
                variant="quinary"
                className={'relative z-20 mt-8'}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                View Case Study
              </Button>
            </Link>
          </AnimateOnScrollDiv>
          <IconButton
            IconComponent={<ChevronDown className={'rotate-90'} />}
            className={'absolute left-4 z-20 md:left-8'}
            onClick={goPrev}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
          <IconButton
            IconComponent={<ChevronDown className={'rotate-[270deg]'} />}
            className={'absolute right-4 z-20 md:right-8'}
            onClick={goNext}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
          <div className="absolute bottom-8 flex gap-2">
            {testimonials.map((t, i) => (
              <div
                key={t.key}
                className={`h-[20px] w-[20px] cursor-pointer rounded-full border-2 border-white opacity-30 hover:opacity-100 ${
                  i === curIndex ? 'bg-white' : 'bg-transparent'
                }`}
                onClick={() => gotoIndex(i)}
              ></div>
            ))}
          </div>
        </div>
        <div
          className={
            'col-span-6 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-12 uppercase md:col-span-6 lg:col-span-2'
          }
        >
          <AnimateOnScrollDiv variants={animationVariants.fadeIn}>
            <Quote className={'mb-2 text-red'} />
            <div
              className={'font-heading font-medium leading-tight text-white'}
              style={{ fontSize: testimonial.testimonialQuoteFontSize + 'px' }}
            >
              {testimonial.testimonialQuote}
            </div>
            <div className={'ml-[60px]'}>
              <div
                className={
                  'relative mt-4 font-heading font-bold leading-none ' +
                  "before:absolute before:left-[-35px] before:top-1/2 before:h-[2px] before:w-[20px] before:bg-red before:content-['']"
                }
              >
                {testimonial.testimonialAuthorName}
              </div>
              <div className={'font-heading text-sm font-medium'}>
                {testimonial.testimonialAuthorTitle}, {testimonial.company}
              </div>
            </div>
          </AnimateOnScrollDiv>
        </div>
      </div>
    </>
  );
};
