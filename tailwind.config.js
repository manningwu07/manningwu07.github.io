/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'octopus': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('src/images/Octopus.jpg')",
        'lake': "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('src/images/Lake.jpg')",
      },
      spacing: {
        '1/100': '1%',
        '1/20': '5%',
        '1/10': '10%',
        '3/20': '15%',
        '1/5': '20%',
        '1/4': '25%',
        '3/10': '30%',
        '1/3': '33.3%',
        '7/20': '35%',
        '2/5': '40%',
        '9/20': '45%',
        '1/2': '50%',
        '11/20': '55%',
        '3/5': '60%',
        '13/20': '65%',
        '7/10': '70%',
        '3/4': '75%',
        '4/5': '80%',
        '17/20': '85%',
        '9/10': '90%',
        '19/20': '95%',
        'full': '100%',
      },
      width: {
        '960': '960px',
        '1440': '1440px',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}