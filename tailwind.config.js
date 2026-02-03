/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Logo colours: Teal (primary) + Lime green (accent)
        brand: {
          50: '#e6f9fc',
          100: '#b3f0f7',
          200: '#80e7f2',
          300: '#4ddeed',
          400: '#23BEDD',
          500: '#23BEDD',
          600: '#1DA5C4',
          700: '#178A9E',
          800: '#116F78',
          900: '#0B5452',
        },
        accent: {
          50: '#f7fce6',
          100: '#e8f7b3',
          200: '#d4f080',
          300: '#c0e94d',
          400: '#B3DA40',
          500: '#B3DA40',
          600: '#9BC235',
          700: '#83AA2A',
          800: '#6B921F',
          900: '#537A14',
        },
      },
      animation: {
        'scroll-left': 'scroll-left 25s linear infinite',
        'scroll-right': 'scroll-right 25s linear infinite',
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(calc(-100% - 2rem))' },
          '100%': { transform: 'translateX(0)' }
        },
        'scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
