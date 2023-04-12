/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'blossom': '#e3afaf',
        'hippo': '#556774',
        'light-sky': '#bcd4e4',
        
      },
      // backgroundImage: {
      //   'lace': "url('/blue-lace.svg')"
      // }
    },
  },
  plugins: [],
}
