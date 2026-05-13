/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red:      '#C41C35',
          'red-dark': '#9B1528',
          'red-mid':  '#E8C5CB',
          'red-light': '#FCF0F2',
        },
        charcoal: {
          50:  '#F5F4F2',
          100: '#ECEAE7',
          200: '#D5D0CA',
          300: '#B5ADA4',
          500: '#7A7268',
          700: '#3A3530',
          800: '#2A2520',
          900: '#1A1714',
        },
        warm: {
          50:  '#FAFAF8',
          100: '#F4F0EB',
          200: '#EBE4DA',
          300: '#D9CFBF',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'display': '-0.02em',
        'tight-display': '-0.03em',
      },
      boxShadow: {
        'card':  '0 2px 8px -1px rgba(26,23,20,0.08), 0 1px 2px -1px rgba(26,23,20,0.04)',
        'card-hover': '0 8px 24px -4px rgba(26,23,20,0.12), 0 2px 6px -2px rgba(26,23,20,0.06)',
        'hero':  '0 20px 60px -10px rgba(26,23,20,0.40)',
        'red':   '0 4px 14px -2px rgba(196,28,53,0.35)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(160deg, #1A1714 0%, #2A2520 50%, #3A3530 100%)',
        'gradient-red':  'linear-gradient(135deg, #C41C35 0%, #9B1528 100%)',
      },
    },
  },
  plugins: [],
};
