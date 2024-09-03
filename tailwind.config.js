const colors = require('./constants/colors.ts')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Light
        NunitoExtraLight: ['Nunito-ExtraLight', 'sans-serif'],
        NunitoExtraLightItalic: ['Nunito-ExtraLightItalic', 'sans-serif'],
        NunitoLight: ['Nunito-Light', 'sans-serif'],
        NunitoLightItalic: ['Nunito-LightItalic', 'sans-serif'],
        // Regular
        NunitoItalic: ['Nunito-Italic', 'sans-serif'],
        NunitoRegular: ['Nunito-Regular', 'sans-serif'],
        // Medium
        NunitoMedium: ['Nunito-Medium', 'sans-serif'],
        NunitoMediumItalic: ['Nunito-MediumItalic', 'sans-serif'],
        // Bold
        NunitoSemiBold: ['Nunito-SemiBold', 'sans-serif'],
        NunitoSemiBoldItalic: ['Nunito-SemiBoldItalic', 'sans-serif'],
        NunitoBold: ['Nunito-Bold', 'sans-serif'],
        NunitoBoldItalic: ['Nunito-BoldItalic', 'sans-serif'],
        NunitoExtraBold: ['Nunito-ExtraBold', 'sans-serif'],
        NunitoExtraBoldItalic: ['Nunito-ExtraBoldItalic', 'sans-serif']
      },
      colors
    }
  },
  plugins: []
}
