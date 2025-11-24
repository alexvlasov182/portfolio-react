/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#FAF9F6',
        textLight: '#1E1E2D',
        secondaryLight: '#4A4A4A',
        bgDark: '#1E1E2D',
        textDark: '#F7F1E8',
        secondaryDark: '#C0C0C0',
        primary: '#6C5DD3',
        primaryDark: '#9B5DE5',
        secondaryAccent: '#FF758F',
        secondaryAccentDark: '#FF4D6D',
        cardLight: '#FFF8E7',
        cardDark: '#2E2E3A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
