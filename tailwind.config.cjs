/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {}
  },
  variants: { scrollbar: ['rounded'] },
  plugins: [require('tailwind-scrollbar')]
}
