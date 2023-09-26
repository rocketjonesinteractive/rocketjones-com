const fadeInDuration = 1;
const fadeInEase = 'easeInOut';

export const addDelay = (variants: any, delay: number) => {
  return {
    ...variants,
    visible: {
      ...variants.visible,
      transition: { ...variants.visible.transition, delay: delay },
    },
  };
};

export const animationVariants = {
  fadeInUp: {
    visible: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
      transition: { duration: fadeInDuration, ease: fadeInEase },
    },
    hidden: { opacity: 0, transform: 'translate3d(0,100%,0)' },
  },
  fadeInDown: {
    visible: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
      transition: { duration: fadeInDuration, ease: fadeInEase },
    },
    hidden: { opacity: 0, transform: 'translate3d(0,-100%,0)' },
  },
  fadeInLeft: {
    visible: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
      transition: { duration: fadeInDuration, ease: fadeInEase },
    },
    hidden: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  },
  fadeInRight: {
    visible: {
      opacity: 1,
      transform: 'translate3d(0,0,0)',
      transition: { duration: fadeInDuration, ease: fadeInEase },
    },
    hidden: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  },
  aboutTile: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, x: 100 },
  },
  expertisePercent: {
    visible: {
      width: '100%',
      transition: { duration: 1, ease: 'easeInOut' },
    },
    hidden: { width: '0%' },
  },
  processTile: {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, y: 100 },
  },
  stat: {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, scale: 0 },
  },
  platformLogo: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, x: -100 },
  },
  promiseText: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, x: -100 },
  },
  promiseTile: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, x: 100 },
  },
  contactMethod: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, x: -100 },
  },
  contactFormInput: {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, x: 100 },
  },
  blogTile: {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    hidden: { opacity: 0, y: 100 },
  },
};
