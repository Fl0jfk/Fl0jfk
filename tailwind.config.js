/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'white': '#fefefe',
      'green' : '#4bd174',
      'grey': '#3d455d',
      'black': '#06142b',
      'purple': '#694af6'
    },
    fontFamily: {
      'sans' : ['San Francisco', 'Arial', 'sans-serif']
    },
    screens: {
      'sm': {'min': '300px', 'max': '767px'},
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
