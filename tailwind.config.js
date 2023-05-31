/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    fontfamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'sky': '#0ea5e9',
      },
      padding: {
        'card': '4.5em 3em 3em 3em',
      },
      width: {
        'card': '27em',
      },
    },
  },
  plugins: [
],
}