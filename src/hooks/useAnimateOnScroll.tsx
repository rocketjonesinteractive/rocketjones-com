'use client';

import { RefObject, useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const useAnimateOnScroll = (ref: RefObject<HTMLElement>) => {
  const control = useAnimation();
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      //control.start('hidden'); // reshow animations when scrolling back up
    }
  }, [control, inView]);

  return { control };
};
