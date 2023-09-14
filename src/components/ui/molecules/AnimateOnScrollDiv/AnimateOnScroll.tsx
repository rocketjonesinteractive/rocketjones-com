'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useAnimateOnScroll } from '@/hooks/useAnimateOnScroll';

export const AnimateOnScrollDiv = ({
  children,
  variants,
  ...rest
}: {
  children?: ReactNode;
  variants: Variants | undefined;
  className?: string;
}) => {
  const ref = useRef(null);
  const { control } = useAnimateOnScroll(ref);

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={control} {...rest}>
      {children}
    </motion.div>
  );
};
