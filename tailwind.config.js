/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      screens: {
        'mobile': '640px',
        'tablet': '768px',
        'laptop': '1440px',
        'desktop': '1600px'
      },
      colors: {
        peach: '#E7816B',
        lightPeach: '#FFAD9B',
        black: '#1D1C1E',
        darkGray: '#333136',
        white: '#FFFFFF',
        lightGray: '#F1F3F5'
      },
      fontFamily: {
        sans: ['var(--font-jost)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
};
