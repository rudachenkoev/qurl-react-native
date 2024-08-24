/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff7ff',
          75: '#e7f3ff',
          100: '#dfefff',
          200: '#b8e0ff',
          300: '#78c8ff',
          400: '#31adff',
          500: '#0692f1',
          600: '#0073ce',
          700: '#005ba7',
          800: '#024d8a',
          900: '#084172',
          950: '#06294b'
        },
        secondary: {
          50: '#f6f6f6',
          75: '#efefef',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626'
        },
        success: {
          50: '#f0fdf5',
          75: '#e6fdef',
          100: '#dcfce8',
          200: '#bbf7d1',
          300: '#86efad',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803c',
          800: '#166533',
          900: '#14532b',
          950: '#052e14'
        },
        error: {
          50: '#fff1f1',
          75: '#ffdfd9',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6464',
          500: '#ff3434',
          600: '#ed1515',
          700: '#c80d0d',
          800: '#a50f0f',
          900: '#881414',
          950: '#4b0404'
        }
      }
    }
  },
  plugins: []
}
