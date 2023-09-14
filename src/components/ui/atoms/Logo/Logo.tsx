import Image from 'next/image';
import { useState } from 'react';
import { scrollToElementId } from '@/utils/scroll';

export const Logo = ({ color }: { color: 'light' | 'dark' }) => {
  const [logoType, setLogoType] = useState<'old' | 'new'>('new');
  return (
    <div onClick={() => scrollToElementId('top')} className={'cursor-pointer'}>
      {logoType === 'old' && (
        <>
          <Image
            src={`/img/rocketjones-logo-white.png`}
            alt={'Rocket Jones Interactive'}
            width={197}
            height={89}
            className={`max-h-[50px] w-auto lg:max-h-[89px] ${color === 'dark' ? 'hidden' : ''}`}
            loading={'eager'}
          />
          <Image
            src={`/img/rocketjones-logo-black.png`}
            alt={'Rocket Jones Interactive'}
            width={197}
            height={89}
            className={`max-h-[50px] w-auto lg:max-h-[89px] ${color === 'light' ? 'hidden' : ''}`}
            loading={'eager'}
          />
        </>
      )}
      {logoType === 'new' && (
        <>
          <Image
            src={`/img/rocket-jones-logo-white.svg`}
            alt={'Rocket Jones Interactive'}
            width={212}
            height={32}
            className={`max-h-[32px] w-auto lg:max-h-[64px] ${color === 'dark' ? 'hidden' : ''}`}
            loading={'eager'}
          />
          <Image
            src={`/img/rocket-jones-logo.svg`}
            alt={'Rocket Jones Interactive'}
            width={212}
            height={32}
            className={`max-h-[32px] w-auto lg:max-h-[64px] ${color === 'light' ? 'hidden' : ''}`}
            loading={'eager'}
          />
        </>
      )}
    </div>
  );
};
