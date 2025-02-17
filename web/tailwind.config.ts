import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: 'nunito',
    },
    screens: {
      '2xs': '475px',
      xs: '600px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'flag-yellow': '#ffcd03',
        'flag-blue': '#003087',
        'flag-red': '#C8102E',
        beige: '#fff0db',
        'pastel-pink': '#f7b6d2',
        'orange-dark': '#FFDFA0',
        'orange-light': '#FFEDDD',
        zircon: '#f5f6ff',
        'pastel-purple': '#d9cdf7',
        'pastel-blue': '#BCD8F0',
        'pastel-light-blue': '#DDEFFF',
        'pastel-dark-blue': '#A0D4FF',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'inner-lg':
          'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 3px 6px 0 rgba(0, 0, 0, 0.08)',
        'inner-xl':
          'inset 0 4px 8px 0 rgba(0, 0, 0, 0.1), inset 0 6px 10px 0 rgba(0, 0, 0, 0.08)',
        figma: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        'inner-figma': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25)',
        'inner-figma-lg': 'inset 0 6px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      minHeight: {
        '128': '32rem',
        '136': '42rem',
      },
      minWidth: {
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '3rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
