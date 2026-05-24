/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        php: {
          navy: '#0b1020',
          purple: '#5d5fef',
          ink: '#111827',
          amber: '#facc15',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(93, 95, 239, 0.22)',
      },
    },
  },
  plugins: [],
};
