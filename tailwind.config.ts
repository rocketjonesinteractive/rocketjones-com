import type { Config } from 'tailwindcss';

import projectEntries, { ProjectEntry } from './src/data/ProjectData.ts';

let config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'hidden',
    'visible',
    'bg-projectProsci1',
    'bg-projectProsci2',
    'bg-projectProsci3',
    'bg-projectMetolius1',
    'bg-projectMetolius2',
    'bg-projectMetolius3',
    'bg-projectExperience1',
    'bg-projectExperience2',
    'bg-projectExperience3',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
    fontFamily: {
      heading: ['var(--font-montserrat)', 'sans-serif'].join(', '),
      body: ['var(--font-roboto)', 'sans-serif'].join(', '),
    },
    extend: {
      colors: {
        red: 'var(--color-red)',
        grey: 'var(--color-grey)',
        greyLight: 'var(--color-grey-light)',
        greyOutline: 'var(--color-grey-outline)',
        greyBorder: 'var(--color-grey-border)',
        tan: 'var(--color-tan)',
        tanDarker: 'var(--color-tan-darker)',
        tanDarkest: 'var(--color-tan-darkest)',
      },
      backgroundPosition: {
        'top-1/2': 'center top -55%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: "url('/img/hero-bg.jpg')",
        projectProsci1: "url('/img/client-images/prosci-1.jpg')",
        projectProsci2: "url('/img/client-images/prosci-2.jpg')",
        projectProsci3: "url('/img/client-images/prosci-3.jpg')",
        projectMetolius1: "url('/img/client-images/metolius-1.jpg')",
        projectMetolius2: "url('/img/client-images/metolius-2.jpg')",
        projectMetolius3: "url('/img/client-images/metolius-3.jpg')",
        projectExperience1: "url('/img/client-images/experience-1.jpg')",
        projectExperience2: "url('/img/client-images/experience-2.jpg')",
        projectExperience3: "url('/img/client-images/experience-3.jpg')",
        map: "url('/img/map-bg.jpg')",
        rocketLandscape: "url('/img/rocket-landscape-bg.jpg')",
        rocketLandscapeSquare: "url('/img/rocket-landscape-square-bg.png')",
        circuits: "url('/img/bg-circuits.png')",
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: '0',
          },
          '30%, 70%': {
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s ease-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

// Add project bgGradient to safelist
projectEntries.forEach((project: ProjectEntry) => {
  if (!config.safelist) config.safelist = [];
  config.safelist.push(project.bgGradient);
});

export default config;
