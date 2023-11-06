'use client';

import Image from 'next/image';
import { useState } from 'react';

export const Footer = () => {
  const [logoType, setLogoType] = useState<'old' | 'new'>('new');

  return (
    <>
      <div>
        <img
          src={'/img/rocket-landscape-bg.jpg'}
          alt={'Rocket Jones'}
          width={1440}
          height={775}
          style={{ width: '100%' }}
        />
      </div>
      <div
        className={
          'flex flex-col items-center justify-center overflow-hidden bg-black py-8 lg:py-16'
        }
      >
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
            src={`/img/rocket-jones-logo-white.svg`}
            alt={'Rocket Jones Interactive'}
            width={207 * 2}
            height={32 * 2}
            className={`max-h-[48px] w-full lg:max-h-[64px]`}
            loading={'eager'}
          />
        )}
        <div className="mt-8 text-center">
          <div className="text-md font-heading font-semibold uppercase text-white">
            Cloud, Web & Mobile &bull; Custom Apps
          </div>
          <div className="text-xs uppercase">&copy; 2023 Rocket Jones Interactive</div>
        </div>
      </div>
    </>
  );
};
