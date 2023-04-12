/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const fontFamily = require('tailwindcss/defaultTheme')

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
        'serif': ['Vollkorn', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        'blossom': '#e3afaf',
        'hippo': '#556774',
        // 'barely-blue': '#bcd4e4',
        'powder-blue': '#9fc8d4',
        'light-sky': '#9ac6e3',
        'sheer': '#ffffff75',
        
      },
      // backgroundImage: {
      //   'lace': "url('/blue-lace.svg')"
      // }
    },
  },
  plugins: [],
}
