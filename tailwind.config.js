/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#141414',
          sand: '#F8F2EA',
          paper: '#FFFFFF',
          accent: '#C77B4A',
          border: '#E7DED4',
          muted: '#6B6258',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(20, 20, 20, 0.35)',
      },
    },
  },
  plugins: [],
};
