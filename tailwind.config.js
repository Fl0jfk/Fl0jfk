/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#FFF',
      'greenPastel' : 'rgb(176 242 182)',
      'grey': 'rgb(46 46 51);',
      'darkGrey': 'rgb(49 51 58)',
      'lightGrey': 'rgb(61 62 66)',
    },
    fontFamily: {
      'sans' : ['San Francisco', 'Arial', 'sans-serif']
    },
    screens: {
      'sm': {'min': '400px', 'max': '767px'},
      'md': {'min': '768px', 'max': '991px'},
      'lg': {'min': '992px', 'max': '1199px'},
      'xl': {'min': '1200px'},
    },
    extend: {
      height: {
        '128': '32rem',
      }
    }
  },
}
