const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
