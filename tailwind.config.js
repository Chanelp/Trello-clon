/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        success: colors.pink,
        primary: colors.blue,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
