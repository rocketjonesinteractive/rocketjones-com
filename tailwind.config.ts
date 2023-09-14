import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['hidden', 'visible'],
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        hero: "url('/img/hero-bg.jpg')",
        expertise: "url('/img/expertise-bg.jpg')",
        map: "url('/img/map-bg.jpg')",
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
export default config;
