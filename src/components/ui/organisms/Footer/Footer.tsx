'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Footer = () => {
  const [logoType, setLogoType] = useState<'old' | 'new'>('new');

  return (
    <div className={'my-8 flex flex-col items-center justify-center overflow-hidden lg:my-16'}>
      {logoType === 'old' && (
        <Image
          src={'/img/rocketjones-logo-black.png'}
          width={278}
          height={124}
          alt={'Rocket Jones'}
        />
      )}
      {logoType === 'new' && (
        <Image
          src={`/img/rocket-jones-logo.svg`}
          alt={'Rocket Jones Interactive'}
          width={207 * 2}
          height={32 * 2}
          className={`max-h-[48px] w-full lg:max-h-[64px]`}
          loading={'eager'}
        />
      )}
      <div className="mt-8 text-center">
        <div className="text-md font-heading font-semibold uppercase text-black">
          Cloud, Web & Mobile &bull; Custom Apps
        </div>
        <div className="text-xs uppercase">&copy; 2023 Rocket Jones Interactive</div>
      </div>
    </div>
  );
};
