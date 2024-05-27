/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './src/**/*.jsx',
    './src/*.js',
    './src/*.jsx'
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm': {'max': '620px'},
      }
    },
  },
  plugins: [],
}

