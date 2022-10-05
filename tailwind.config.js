/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['coolGray'];
delete colors['blueGray'];
delete colors['warmGray'];
delete colors['trueGray'];

module.exports = {
  content: [
    './src/**/*{html,js,jsx}'
  ],
  theme: {
    colors: {
      ...colors,
    }
    // extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
