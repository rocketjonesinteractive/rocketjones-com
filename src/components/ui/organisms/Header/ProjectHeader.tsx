'use client';

import { useEffect, useState } from 'react';
import projectEntries, { ProjectEntry } from '@/data/ProjectData.ts';
import Image from 'next/image';
import { IconButton } from '@/components/ui/atoms/IconButton/IconButton.tsx';
import ChevronDown from '../../../../../public/img/icons/chevron-down.svg';
import { slugify } from '@/utils/string.ts';
import { useRouter } from 'next/navigation';

export const ProjectHeader = ({ data }: { data: ProjectEntry }) => {
  const router = useRouter();

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const toggleFixedHeader = () => {
      if (window.scrollY > 130) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', toggleFixedHeader);

    toggleFixedHeader();

    return () => {
      window.removeEventListener('scroll', toggleFixedHeader);
    };
  }, []);

  const goNext = () => {
    let index = projectEntries.findIndex((x) => x.key === data.key) + 1;
    if (index > projectEntries.length - 1) index = 0;
    router.push(`/projects/${slugify(projectEntries[index].key)}`);
  };

  const goPrev = () => {
    let index = projectEntries.findIndex((x) => x.key === data.key) - 1;
    if (index < 0) index = projectEntries.length - 1;
    router.push(`/projects/${slugify(projectEntries[index].key)}`);
  };

  return (
    <div
      id={'projectHeader'}
      className={
        'invisible absolute bottom-0 left-0 right-0 top-[-130px] z-30 mx-auto h-[var(--header-height)] px-4 py-4 transition-all duration-0 md:visible lg:px-4 lg:py-4 ' +
        data.bgGradient +
        (isFixed
          ? ' !fixed !top-[0] translate-y-[var(--header-height)] bg-white text-black shadow-lg !duration-700 '
          : '')
      }
    >
      <div className={'container flex h-full items-center justify-between'}>
        <div className={'font-heading text-2xl text-white lg:text-4xl'}>Case Study</div>
        <div className={'relative flex items-center justify-center gap-8'}>
          <IconButton
            IconComponent={<ChevronDown className={'rotate-90'} />}
            className={'md:left-8'}
            onClick={goPrev}
          />
          <Image
            src={data.logoUrl}
            alt={`${data.company} Logo`}
            width={data.logoWidth}
            height={data.logoHeight}
            style={{ width: data.logoWidth, height: data.logoHeight }}
          />
          <IconButton
            IconComponent={<ChevronDown className={'rotate-[270deg]'} />}
            className={'md:right-8'}
            onClick={goNext}
          />
        </div>
      </div>
    </div>
  );
};
