'use client';

import { Button } from '@/components/ui/atoms/Button/Button.tsx';
import Spotlight from '@/components/ui/organisms/Spotlight/Spotlight.tsx';
import { BgOverlay } from '@/components/ui/atoms/BgOverlay/BgOverlay.tsx';
import { BlogEntry } from '@/components/ui/organisms/Blog/BlogData.ts';
import { slugify } from '@/utils/string.ts';
import Link from 'next/link';
import { addDelay, animationVariants } from '@/utils/animations.ts';
import { AnimateOnScrollDiv } from '@/components/ui/molecules/AnimateOnScrollDiv/AnimateOnScroll.tsx';

export const BlogTile = ({
  data,
  index,
  animDelay,
}: {
  data: BlogEntry;
  index: number;
  animDelay: number;
}) => {
  if (index === 0)
    return (
      <Link
        href={`/blog/${slugify(data.title)}`}
        className={
          `boxed-thickwhite group relative col-span-1 cursor-pointer text-white md:col-span-2 ` +
          'bg-gradient-to-br from-zinc-700 via-zinc-900 to-black'
        }
      >
        <AnimateOnScrollDiv
          variants={addDelay(animationVariants.blogTile, animDelay ?? 0)}
          className={`relative h-full bg-cover bg-center p-12`}
          style={{ backgroundImage: `url('/img/blog/${data.image}')` }}
        >
          <div className={'relative z-[2]'}>
            <h3
              className={
                'w-full font-heading text-[36px] font-black leading-tight [text-wrap:balance] md:w-1/2'
              }
            >
              {data.title}
            </h3>
            <div className="my-4 w-[60px] border-b-2 border-b-red"></div>
            <div className={'w-full [text-wrap:balance] md:w-1/2'}>{data.caption}</div>
            <Button variant={'quaternary'} className={'mt-8'}>
              Read More
            </Button>
          </div>
          <Spotlight />
          <div className={'opacity-50 transition-opacity group-hover:opacity-30'}>
            <BgOverlay opacity={100} />
          </div>
        </AnimateOnScrollDiv>
      </Link>
    );
  else
    return (
      <Link
        href={`/blog/${slugify(data.title)}`}
        className={
          `boxed-thickwhite group relative cursor-pointer text-white ` +
          `bg-gradient-to-br from-zinc-700 via-zinc-900 to-black`
        }
      >
        <AnimateOnScrollDiv variants={addDelay(animationVariants.blogTile, animDelay ?? 0)}>
          <div>
            <img src={`/img/blog/${data.image}`} />
          </div>
          <div className="relative z-[2] p-12 pt-10">
            <h3
              className={
                'mb-2 font-heading text-[20px] font-black leading-tight text-red [text-wrap:balance] group-hover:text-white'
              }
            >
              {data.title}
            </h3>
            <div className="my-4 w-[60px] border-b-2 border-b-red"></div>
            <div>{data.caption}</div>
          </div>
          <Spotlight />
          <div className={'opacity-50 transition-opacity group-hover:opacity-30'}>
            <BgOverlay opacity={100} />
          </div>
        </AnimateOnScrollDiv>
      </Link>
    );
};
