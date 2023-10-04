/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFF',
      'greenPastel' : 'rgb(176 242 182)',
      'grey': 'rgb(46 46 51);',
      'darkGrey': 'rgb(49 51 58)',
      'lightGrey': 'rgb(61 62 66)',
    },
    fontFamily: {
      'sans' : ['San Francisco', 'Arial', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}
