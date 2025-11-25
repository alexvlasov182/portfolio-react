/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#F5F5F7',
        surfaceLight: '#FFFFFF',
        textLight: '#1D1D1F',
        mutedLight: '#6E6E73',

        bgDark: '#0A0A0A',
        surfaceDark: '#0F1724',
        textDark: '#ECECEC',
        mutedDark: '#A1A1A6',

        accent: '#6C5DD3',
        accentCold: '#3B82F6',
      },
      animation: {
        'spin-slow': 'spin 1s linear',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { lg: '16px', xl: '20px' },
      boxShadow: { card: '0 6px 30px rgba(2,6,23,0.12)' },
      maxWidth: { layout: '1280px' },
    },
  },
  plugins: [],
};
