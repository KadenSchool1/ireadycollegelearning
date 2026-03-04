/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6fcff',
          100: '#b3f5ff',
          200: '#80efff',
          300: '#4de8ff',
          400: '#1ae1ff',
          500: '#00d4f2',
          600: '#00a8c7',
          700: '#007c9b',
          800: '#00506f',
          900: '#002443',
        },
        accent: {
          cyan: '#00eaff',
          light: '#b1e8fc',
          dark: '#00113d',
          medium: '#066b99',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #066b99 20%, #00113d 100%)',
        'gradient-rainbow': 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)',
      },
    },
  },
  plugins: [],
}
