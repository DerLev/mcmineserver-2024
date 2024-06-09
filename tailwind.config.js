const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: '#526488',
        primaryLight: '#697da5',
        secondary: '#374a72',
        discord: '#5966f3',
        discordNitro: '#ff73fa',
      }
    },
    fontFamily: {
      display: ['"Karla"', 'sans-serif'],
      body: ['"Montserrat"', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

