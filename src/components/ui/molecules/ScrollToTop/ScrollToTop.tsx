'use client';

import { scrollToElementId } from '@/utils/scroll';
import ChevronDown from '@/../public/img/icons/chevron-down.svg';
import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const toggleHasScrolled = () => {
      if (window.scrollY > 500) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', toggleHasScrolled);

    toggleHasScrolled();

    return () => {
      window.removeEventListener('scroll', toggleHasScrolled);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[20px] right-[20px] z-[2] flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[18px] bg-grey text-white transition-all hover:scale-125 hover:bg-red hover:text-white ${
        hasScrolled ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`}
      onClick={() => scrollToElementId('top')}
    >
      <ChevronDown className={'rotate-180'} />
    </div>
  );
};
