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
      'grey': 'rgb(22,27,34)',
      'black': '#000000',
      'purple': '#694af6'
    },
    screens: {
      'sm': {'min': '350px', 'max': '767px'},
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
