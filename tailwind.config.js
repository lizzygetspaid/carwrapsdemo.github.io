/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          500: '#D4AF37',
          600: '#C19B2C',
        }
      },
      animation: {
        'slowplay': 'slowplay 1s steps(1) infinite',
      },
      keyframes: {
        slowplay: {
          '0%': { opacity: '1' },
          '50%': { opacity: '1' }, // Adjust this value to control speed
        },
      },
    },
  },
  plugins: [],
};