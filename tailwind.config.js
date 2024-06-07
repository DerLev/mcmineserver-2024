/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
    './app/**/*.tsx',
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['"Karla"', 'sans-serif'],
      body: ['"Montserrat"', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

