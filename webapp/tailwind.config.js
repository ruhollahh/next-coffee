/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx}', '../packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5c7f67',
        secondary: {
          DEFAULT: '#ecf4e7',
          content: '#24331a',
        },
        accent: {
          DEFAULT: '#fae5e5',
          content: '#322020',
        },
        neutral: {
          DEFAULT: '#5d5656',
          content: '#e9e7e7',
        },
        'base-100': {
          DEFAULT: '#e9e7e7',
          content: '#100f0f',
        },
      },
    },
  },
  plugins: [],
};
