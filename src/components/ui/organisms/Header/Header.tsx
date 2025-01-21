'use client';

import { MainNav } from '@/components/ui/molecules/MainNav/MainNav';
import { Logo } from '@/components/ui/atoms/Logo/Logo';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [useBlackBg, setUseBlackBg] = useState(false);

  const pathname = usePathname();

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

  useEffect(() => {
    setUseBlackBg(pathname !== '/');
  }, [pathname]);

  return (
    <div
      id={'header'}
      className={
        'absolute bottom-0 left-0 right-0 top-0 z-30 mx-auto h-[var(--header-height)] px-4 py-2 transition-transform duration-0 lg:px-4 lg:py-4 ' +
        (isFixed
          ? '!fixed !top-[-130px] translate-y-[130px] bg-white text-black shadow-lg !duration-700 '
          : '') +
        (useBlackBg ? 'bg-black' : '')
      }
    >
      <div className={'container flex h-full items-center justify-between'}>
        <Logo color={isFixed ? 'dark' : 'light'} />
        <MainNav color={isFixed ? 'dark' : 'light'} />
      </div>
    </div>
  );
};
